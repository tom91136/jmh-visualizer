import React, { Component, PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import Table from 'react-bootstrap/lib/Table'

import { round, formatNumber } from 'functions/util.js'
import { blue, red } from 'functions/colors.js'



export default class SingleRunChartTooltip extends Component {

    static propTypes = {
        label: PropTypes.any,
        scoreUnit: PropTypes.string,
        roundScores: PropTypes.bool,
        payload: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.any,
            payload: PropTypes.any,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            unit: PropTypes.any,
        })),
    };

    render() {
        const {label, payload, scoreUnit, roundScores} = this.props;
        if (!payload || payload.length == 0) {
            return null;
        }

        // Assemble table headers showing score, error, etc...
        const tableHeaders = [];
        if (payload.length > 1) {
            tableHeaders.push(<th key='1'>
                                Run
                              </th>);
        }
        tableHeaders.push(<th key='2'>
                            Score
                          </th>);
        tableHeaders.push(<th key='3'>
                            Error
                          </th>);
        tableHeaders.push(<th key='4'>
                            Confidence
                          </th>);
        tableHeaders.push(<th key='5'>
                            Unit
                          </th>);

        // Assemble table rows showing score, error, etc... per bar
        const tableRows = payload.map(barPayload => {
            const confidenceInterval = barPayload.payload[barPayload.dataKey + 'Confidence'];
            const columnValues = [];
            if (payload.length > 1) {
                columnValues.push(<td key='run'>
                                    { barPayload.dataKey }
                                  </td>);
            }
            columnValues.push(<td key='score' style={ { color: blue } }>
                                { formatNumber(barPayload.payload[barPayload.dataKey], roundScores) }
                              </td>);
            columnValues.push(<td key='error' style={ { color: red } }>
                                { formatNumber(barPayload.payload[barPayload.dataKey + 'Error'], roundScores) }
                              </td>);
            columnValues.push(<td key='confidence'>
                                { barPayload.payload[barPayload.dataKey] ? formatNumber(confidenceInterval[0], roundScores) + ' - ' + formatNumber(confidenceInterval[1], roundScores) : "n/a" }
                              </td>);
            columnValues.push(<td key='unit'>
                                { scoreUnit }
                              </td>);
            return <tr key={ barPayload.name }>
                     { columnValues }
                   </tr>
        });

        //Assemble iteration charts showing the raw iteration data per run 
        const iterationCharts = payload.map(barPayload => {
            const forkScores = barPayload.payload[barPayload.dataKey + 'SubScores'];
            const forkHistograms = barPayload.payload[barPayload.dataKey + 'SubScoresHistogram'];
            if (forkHistograms) {
                const tooltipWidth = forkHistograms[0].length * 54;
                return forkHistograms.filter((elem, i) => i < 2).map((forkData, forkIndex) => {
                    const histogramCharts = forkData.filter((elem, sampleRunIndex) => sampleRunIndex < 2).map((sampleRuns, runIndex) => {
                        const sampleRunData = sampleRuns.map(pair => {
                            return {
                                score: pair[0],
                                occurence: pair[1]
                            }
                        }
                        );
                        return <BarChart
                                         key={ 'chart' + forkIndex + '-' + runIndex }
                                         width={ tooltipWidth }
                                         height={ 63 }
                                         data={ sampleRunData }
                                         margin={ { top: 18 } }>
                                 <XAxis dataKey='score' orientation='bottom' height={ 15 } />
                                 <YAxis />
                                 <Bar dataKey='occurence' fill={ barPayload.fill } isAnimationActive={ false } />
                               </BarChart>
                    });
                    return <div key={ 'fork' + forkIndex }>
                             <br/>
                             <div>
                               <b>{ `Fork ${forkIndex} / ${forkHistograms.length}` }</b>
                             </div>
                             <div>
                               { histogramCharts }
                             </div>
                             <div>
                               { `Showing ${histogramCharts.length}  runs from ${forkHistograms[forkIndex].length} ...` }
                             </div>
                           </div>
                });
            }
            if (forkScores) {
                const forkScoreDatas = forkScores.map((iterationScoreArray) => {
                    return iterationScoreArray.map((element) => {
                        return {
                            data: round(element, roundScores),
                        }
                    })
                });
                const tooltipWidth = forkScores[0].length * 54

                const BarLabel = (props) => {
                    return (
                        <text
                              stroke={ blue }
                              fontSize={ 9 }
                              fontWeight='normal'
                              textAnchor={ props.textAnchor }
                              x={ props.x }
                              y={ props.y - 1 }
                              width={ props.width }
                              height={ props.height }>
                          { formatNumber(props['data'], roundScores) }
                        </text>
                    );
                };


                return forkScoreDatas.map((data, index) => <div key={ 'iterations' + index }>
                                                             <BarChart
                                                                       width={ tooltipWidth }
                                                                       height={ 36 }
                                                                       data={ data }
                                                                       margin={ { top: 18 } }>
                                                               <Bar
                                                                    dataKey='data'
                                                                    fill={ barPayload.fill }
                                                                    isAnimationActive={ false }
                                                                    label={ <BarLabel/> } />
                                                             </BarChart>
                                                           </div>
                )
            }
            return null;
        });

        return (
            <div>
              <div style={ { textAlign: 'center' } }>
                <u><h4>{ label }</h4></u>
              </div>
              <Table
                     striped
                     bordered
                     condensed
                     hover>
                <thead>
                  <tr>
                    { tableHeaders }
                  </tr>
                </thead>
                <tbody>
                  { tableRows }
                </tbody>
              </Table>
              <div style={ { textAlign: 'center' } }>
                <u><h5>Raw Data</h5></u>
              </div>
              <div style={ { fontSize: '0.72em' } }>
                { iterationCharts }
              </div>
              <br/>
            </div>
        );
    }
}
