export const exampleRun2 = [
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.ListCreationBenchmark.arrayList",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2657004.0226546833,
            "scoreError": 1316876.2732357727,
            "scoreConfidence": [
                1340127.7494189106,
                3973880.295890456
            ],
            "scorePercentiles": {
                "0.0": 1353246.9734590163,
                "50.0": 3093983.246403984,
                "90.0": 3523184.9143888643,
                "95.0": 3531388.323540429,
                "99.0": 3531388.323540429,
                "99.9": 3531388.323540429,
                "99.99": 3531388.323540429,
                "99.999": 3531388.323540429,
                "99.9999": 3531388.323540429,
                "100.0": 3531388.323540429
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    3449354.2320247795,
                    3228699.4323227573,
                    3204695.3127599033,
                    2313563.012087752,
                    1729556.0814846298
                ],
                [
                    3531388.323540429,
                    3357714.419262264,
                    2983271.180048064,
                    1353246.9734590163,
                    1418551.2595572362
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.ListCreationBenchmark.arrayList_preSized",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 3927974.68895474,
            "scoreError": 419868.1819872975,
            "scoreConfidence": [
                3508106.506967442,
                4347842.870942038
            ],
            "scorePercentiles": {
                "0.0": 3355748.326215153,
                "50.0": 4005008.8139333883,
                "90.0": 4236051.258016388,
                "95.0": 4238123.18322758,
                "99.0": 4238123.18322758,
                "99.9": 4238123.18322758,
                "99.99": 4238123.18322758,
                "99.999": 4238123.18322758,
                "99.9999": 4238123.18322758,
                "100.0": 4238123.18322758
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    4104993.211134234,
                    4015659.127951769,
                    4238123.18322758,
                    3843522.222398928,
                    4108778.9961713967
                ],
                [
                    4217403.931115654,
                    3994358.499915008,
                    3355748.326215153,
                    3706277.155798067,
                    3694882.2356196092
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.ListCreationBenchmark.arrayList_preSized_reUsed",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 4639755.816807859,
            "scoreError": 106763.32787896539,
            "scoreConfidence": [
                4532992.488928894,
                4746519.144686824
            ],
            "scorePercentiles": {
                "0.0": 4491022.321286812,
                "50.0": 4642401.145093676,
                "90.0": 4746383.118536301,
                "95.0": 4748573.707502764,
                "99.0": 4748573.707502764,
                "99.9": 4748573.707502764,
                "99.99": 4748573.707502764,
                "99.999": 4748573.707502764,
                "99.9999": 4748573.707502764,
                "100.0": 4748573.707502764
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    4491022.321286812,
                    4726667.817838135,
                    4639839.6901254095,
                    4646135.490626551,
                    4748573.707502764
                ],
                [
                    4632844.294254836,
                    4589895.8370635435,
                    4658316.978247522,
                    4619299.431071063,
                    4644962.600061942
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.ListCreationBenchmark.immutableList",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 3386678.5670606,
            "scoreError": 140765.55192277327,
            "scoreConfidence": [
                3245913.0151378266,
                3527444.1189833735
            ],
            "scorePercentiles": {
                "0.0": 3218579.7410675054,
                "50.0": 3428363.397489608,
                "90.0": 3465525.7184336027,
                "95.0": 3465701.2109522037,
                "99.0": 3465701.2109522037,
                "99.9": 3465701.2109522037,
                "99.99": 3465701.2109522037,
                "99.999": 3465701.2109522037,
                "99.9999": 3465701.2109522037,
                "100.0": 3465701.2109522037
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    3465701.2109522037,
                    3462043.6362515804,
                    3452071.414854968,
                    3462564.8862212636,
                    3463946.2857661927
                ],
                [
                    3404655.3801242476,
                    3256176.477292624,
                    3330038.3665893287,
                    3218579.7410675054,
                    3351008.271486084
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NoOpStrategyBenchmark.noOpImplementation",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 298819.93809573614,
            "scoreError": 4911.713093571093,
            "scoreConfidence": [
                293908.22500216507,
                303731.6511893072
            ],
            "scorePercentiles": {
                "0.0": 292363.1384119453,
                "50.0": 300186.5834219452,
                "90.0": 301523.6931687772,
                "95.0": 301529.55531022145,
                "99.0": 301529.55531022145,
                "99.9": 301529.55531022145,
                "99.99": 301529.55531022145,
                "99.999": 301529.55531022145,
                "99.9999": 301529.55531022145,
                "100.0": 301529.55531022145
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    301428.72978428035,
                    295428.2320370526,
                    292363.1384119453,
                    300632.87027732213,
                    300988.45904228196
                ],
                [
                    299740.2965665684,
                    301470.9338957791,
                    299208.29093980754,
                    301529.55531022145,
                    295408.87469210225
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NoOpStrategyBenchmark.nullCheck",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 291733.700349705,
            "scoreError": 6032.844825334045,
            "scoreConfidence": [
                285700.85552437097,
                297766.54517503903
            ],
            "scorePercentiles": {
                "0.0": 284918.38892700843,
                "50.0": 292070.614746033,
                "90.0": 298373.7590223232,
                "95.0": 298781.270125536,
                "99.0": 298781.270125536,
                "99.9": 298781.270125536,
                "99.99": 298781.270125536,
                "99.999": 298781.270125536,
                "99.9999": 298781.270125536,
                "100.0": 298781.270125536
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    298781.270125536,
                    294134.0815001689,
                    293090.0454264358,
                    284918.38892700843,
                    289435.1598177072
                ],
                [
                    291392.35119081597,
                    292363.7687296352,
                    294706.1590934077,
                    291777.4607624307,
                    286738.3179239042
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NoOpStrategyBenchmark.optional",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 291444.63418205956,
            "scoreError": 17905.542587284366,
            "scoreConfidence": [
                273539.0915947752,
                309350.1767693439
            ],
            "scorePercentiles": {
                "0.0": 269665.9839753484,
                "50.0": 295401.0369823201,
                "90.0": 305037.5562936196,
                "95.0": 305567.52926752873,
                "99.0": 305567.52926752873,
                "99.9": 305567.52926752873,
                "99.99": 305567.52926752873,
                "99.999": 305567.52926752873,
                "99.9999": 305567.52926752873,
                "100.0": 305567.52926752873
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    287710.5813609986,
                    295732.4713751821,
                    300267.7995284377,
                    305567.52926752873,
                    269665.9839753484
                ],
                [
                    296550.7220384209,
                    294883.12884009746,
                    297362.81215764297,
                    295069.60258945805,
                    271635.7106874807
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.SwitchVsPolymorphismBenchmark.coupled",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 227399.61865635595,
            "scoreError": 4826.023634613859,
            "scoreConfidence": [
                222573.59502174208,
                232225.64229096982
            ],
            "scorePercentiles": {
                "0.0": 221280.83399856192,
                "50.0": 228108.05612416708,
                "90.0": 231098.5644074739,
                "95.0": 231193.28750727806,
                "99.0": 231193.28750727806,
                "99.9": 231193.28750727806,
                "99.99": 231193.28750727806,
                "99.999": 231193.28750727806,
                "99.9999": 231193.28750727806,
                "100.0": 231193.28750727806
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    228997.5429749246,
                    227218.56927340955,
                    230246.0565092363,
                    229799.6319756254,
                    231193.28750727806
                ],
                [
                    223195.54605132077,
                    221280.83399856192,
                    226394.60009921066,
                    229312.05994542243,
                    226358.0582285696
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.SwitchVsPolymorphismBenchmark.polymorphic",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 284167.1558920726,
            "scoreError": 4598.334375971356,
            "scoreConfidence": [
                279568.82151610125,
                288765.49026804394
            ],
            "scorePercentiles": {
                "0.0": 281216.38141224155,
                "50.0": 283214.5459540064,
                "90.0": 288517.9256193677,
                "95.0": 288530.0328125064,
                "99.0": 288530.0328125064,
                "99.9": 288530.0328125064,
                "99.99": 288530.0328125064,
                "99.999": 288530.0328125064,
                "99.9999": 288530.0328125064,
                "100.0": 288530.0328125064
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    281895.3321136599,
                    284533.7597943529,
                    288408.9608811189,
                    281330.81606887706,
                    281216.38141224155
                ],
                [
                    287272.8429385603,
                    281440.28955335356,
                    288530.0328125064,
                    281751.33041326434,
                    285291.8129327909
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.SwitchVsPolymorphismBenchmark.switchStyle",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 223648.69935357495,
            "scoreError": 3914.8290656641084,
            "scoreConfidence": [
                219733.87028791083,
                227563.52841923907
            ],
            "scorePercentiles": {
                "0.0": 218929.64062305252,
                "50.0": 223787.8775546733,
                "90.0": 227709.70156894714,
                "95.0": 227880.83672564768,
                "99.0": 227880.83672564768,
                "99.9": 227880.83672564768,
                "99.99": 227880.83672564768,
                "99.999": 227880.83672564768,
                "99.9999": 227880.83672564768,
                "100.0": 227880.83672564768
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    224666.71593486346,
                    222858.25833947462,
                    218929.64062305252,
                    221419.47766933072,
                    225321.87740030806
                ],
                [
                    226169.48515864246,
                    227880.83672564768,
                    221664.94657508304,
                    224238.84156929023,
                    223336.91354005635
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.StupidMultithreadedBenchmark.withThreads1",
        "mode": "thrpt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 0,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1423.0828350935349,
            "scoreError": 116.59361540046073,
            "scoreConfidence": [
                1306.4892196930741,
                1539.6764504939956
            ],
            "scorePercentiles": {
                "0.0": 1384.2649131781372,
                "50.0": 1439.623075206597,
                "90.0": 1452.9787767302555,
                "95.0": 1452.9787767302555,
                "99.0": 1452.9787767302555,
                "99.9": 1452.9787767302555,
                "99.99": 1452.9787767302555,
                "99.999": 1452.9787767302555,
                "99.9999": 1452.9787767302555,
                "100.0": 1452.9787767302555
            },
            "scoreUnit": "ops/us",
            "rawData": [
                [
                    1397.3183815473628,
                    1384.2649131781372,
                    1441.229028805322,
                    1452.9787767302555,
                    1439.623075206597
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.StupidMultithreadedBenchmark.withThreads2",
        "mode": "thrpt",
        "threads": 2,
        "forks": 1,
        "warmupIterations": 0,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2709.519000423132,
            "scoreError": 87.56441582162755,
            "scoreConfidence": [
                2621.954584601505,
                2797.0834162447595
            ],
            "scorePercentiles": {
                "0.0": 2686.413309242415,
                "50.0": 2711.49868359879,
                "90.0": 2735.28220924157,
                "95.0": 2735.28220924157,
                "99.0": 2735.28220924157,
                "99.9": 2735.28220924157,
                "99.99": 2735.28220924157,
                "99.999": 2735.28220924157,
                "99.9999": 2735.28220924157,
                "100.0": 2735.28220924157
            },
            "scoreUnit": "ops/us",
            "rawData": [
                [
                    2711.49868359879,
                    2686.5100633865604,
                    2686.413309242415,
                    2735.28220924157,
                    2727.8907366463245
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.StupidMultithreadedBenchmark.withThreads4",
        "mode": "thrpt",
        "threads": 4,
        "forks": 1,
        "warmupIterations": 0,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2653.5588504588463,
            "scoreError": 322.2925950312916,
            "scoreConfidence": [
                2331.266255427555,
                2975.851445490138
            ],
            "scorePercentiles": {
                "0.0": 2533.704129579117,
                "50.0": 2701.4748531606174,
                "90.0": 2723.7185302367325,
                "95.0": 2723.7185302367325,
                "99.0": 2723.7185302367325,
                "99.9": 2723.7185302367325,
                "99.99": 2723.7185302367325,
                "99.999": 2723.7185302367325,
                "99.9999": 2723.7185302367325,
                "100.0": 2723.7185302367325
            },
            "scoreUnit": "ops/us",
            "rawData": [
                [
                    2533.704129579117,
                    2597.7182912767603,
                    2711.178448041006,
                    2701.4748531606174,
                    2723.7185302367325
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.ThroughputBenchmark.sleep100Milliseconds",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 9.720560939364038,
            "scoreError": 0.035475505314495136,
            "scoreConfidence": [
                9.685085434049542,
                9.756036444678534
            ],
            "scorePercentiles": {
                "0.0": 9.626048472207733,
                "50.0": 9.73567258110794,
                "90.0": 9.769758283885812,
                "95.0": 9.774533778969898,
                "99.0": 9.77470574936922,
                "99.9": 9.77470574936922,
                "99.99": 9.77470574936922,
                "99.999": 9.77470574936922,
                "99.9999": 9.77470574936922,
                "100.0": 9.77470574936922
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    9.771266341382773,
                    9.689912790707364,
                    9.75192577275669,
                    9.73948367416809,
                    9.71917685449332,
                    9.742569266915211,
                    9.724065890258803,
                    9.745998937534079,
                    9.77470574936922,
                    9.75284160572918
                ],
                [
                    9.740820969677804,
                    9.626048472207733,
                    9.708648290014855,
                    9.739014872817748,
                    9.756185766413168,
                    9.682353544671871,
                    9.732330289398131,
                    9.674464364597622,
                    9.640132002173264,
                    9.699273331993851
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.ThroughputBenchmark.sleep100MillisecondsRandom",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 13.103216361160563,
            "scoreError": 0.554562105020922,
            "scoreConfidence": [
                12.54865425613964,
                13.657778466181485
            ],
            "scorePercentiles": {
                "0.0": 11.69138411193413,
                "50.0": 13.243260884827105,
                "90.0": 13.805892231512932,
                "95.0": 14.272693032386176,
                "99.0": 14.297076758113292,
                "99.9": 14.297076758113292,
                "99.99": 14.297076758113292,
                "99.999": 14.297076758113292,
                "99.9999": 14.297076758113292,
                "100.0": 14.297076758113292
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    12.813716003475431,
                    12.209675873406884,
                    12.566148179853077,
                    13.465742621758928,
                    12.214074149676756,
                    13.17859809149764,
                    14.297076758113292,
                    13.774302122990584,
                    12.789415847779553,
                    12.925793300413424
                ],
                [
                    12.753727123461843,
                    11.69138411193413,
                    13.30792367815657,
                    13.414623010334731,
                    12.750371267762569,
                    13.715873595485514,
                    13.485119656886157,
                    13.400087387329888,
                    13.501272199323363,
                    13.80940224357097
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.ThroughputBenchmark.sleep50Milliseconds",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 18.925303096463146,
            "scoreError": 0.09174067692192324,
            "scoreConfidence": [
                18.833562419541224,
                19.01704377338507
            ],
            "scorePercentiles": {
                "0.0": 18.670319883572592,
                "50.0": 18.950608706725305,
                "90.0": 19.071328793764444,
                "95.0": 19.081872403484752,
                "99.0": 19.08237923703181,
                "99.9": 19.08237923703181,
                "99.99": 19.08237923703181,
                "99.999": 19.08237923703181,
                "99.9999": 19.08237923703181,
                "100.0": 19.08237923703181
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    18.946660527629554,
                    18.670319883572592,
                    18.956634621603758,
                    18.907518242155213,
                    18.932849763638018,
                    18.84783900206081,
                    18.86844508378116,
                    18.98023975685121,
                    18.954556885821052,
                    18.959712251480713
                ],
                [
                    18.97049630161875,
                    19.08237923703181,
                    19.07224256609067,
                    19.063104842828423,
                    18.98852473320667,
                    19.034620377875836,
                    18.831941830248795,
                    18.789810732244035,
                    18.815606119251033,
                    18.832559170272887
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.OneParamMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10"
        },
        "primaryMetric": {
            "score": 11441.42973589048,
            "scoreError": 2515.3366406116834,
            "scoreConfidence": [
                8926.093095278797,
                13956.766376502164
            ],
            "scorePercentiles": {
                "0.0": 11329.12511235955,
                "50.0": 11399.857853932584,
                "90.0": 11595.30624137931,
                "95.0": 11595.30624137931,
                "99.0": 11595.30624137931,
                "99.9": 11595.30624137931,
                "99.99": 11595.30624137931,
                "99.999": 11595.30624137931,
                "99.9999": 11595.30624137931,
                "100.0": 11595.30624137931
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11399.857853932584,
                    11329.12511235955,
                    11595.30624137931
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.OneParamMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20"
        },
        "primaryMetric": {
            "score": 22559.127524476655,
            "scoreError": 5415.700770798631,
            "scoreConfidence": [
                17143.426753678024,
                27974.828295275285
            ],
            "scorePercentiles": {
                "0.0": 22217.023195652175,
                "50.0": 22711.603466666667,
                "90.0": 22748.75591111111,
                "95.0": 22748.75591111111,
                "99.0": 22748.75591111111,
                "99.9": 22748.75591111111,
                "99.99": 22748.75591111111,
                "99.999": 22748.75591111111,
                "99.9999": 22748.75591111111,
                "100.0": 22748.75591111111
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    22748.75591111111,
                    22217.023195652175,
                    22711.603466666667
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.OneParamMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10"
        },
        "primaryMetric": {
            "score": 11380.068044560778,
            "scoreError": 1787.4355805086757,
            "scoreConfidence": [
                9592.632464052102,
                13167.503625069454
            ],
            "scorePercentiles": {
                "0.0": 11296.1002247191,
                "50.0": 11356.392011235956,
                "90.0": 11487.711897727273,
                "95.0": 11487.711897727273,
                "99.0": 11487.711897727273,
                "99.9": 11487.711897727273,
                "99.99": 11487.711897727273,
                "99.999": 11487.711897727273,
                "99.9999": 11487.711897727273,
                "100.0": 11487.711897727273
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11356.392011235956,
                    11296.1002247191,
                    11487.711897727273
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.OneParamMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20"
        },
        "primaryMetric": {
            "score": 22806.663141077443,
            "scoreError": 4502.081890340716,
            "scoreConfidence": [
                18304.581250736726,
                27308.74503141816
            ],
            "scorePercentiles": {
                "0.0": 22616.045377777777,
                "50.0": 22718.543,
                "90.0": 23085.401045454546,
                "95.0": 23085.401045454546,
                "99.0": 23085.401045454546,
                "99.9": 23085.401045454546,
                "99.99": 23085.401045454546,
                "99.999": 23085.401045454546,
                "99.9999": 23085.401045454546,
                "100.0": 23085.401045454546
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    22718.543,
                    22616.045377777777,
                    23085.401045454546
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.OneParamSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10"
        },
        "primaryMetric": {
            "score": 11436.848875715701,
            "scoreError": 3562.192351864783,
            "scoreConfidence": [
                7874.656523850917,
                14999.041227580485
            ],
            "scorePercentiles": {
                "0.0": 11284.25573033708,
                "50.0": 11369.404988764045,
                "90.0": 11656.885908045977,
                "95.0": 11656.885908045977,
                "99.0": 11656.885908045977,
                "99.9": 11656.885908045977,
                "99.99": 11656.885908045977,
                "99.999": 11656.885908045977,
                "99.9999": 11656.885908045977,
                "100.0": 11656.885908045977
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11656.885908045977,
                    11369.404988764045,
                    11284.25573033708
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.OneParamSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20"
        },
        "primaryMetric": {
            "score": 22719.98896077441,
            "scoreError": 6050.626275127044,
            "scoreConfidence": [
                16669.362685647367,
                28770.615235901456
            ],
            "scorePercentiles": {
                "0.0": 22480.480888888887,
                "50.0": 22580.95328888889,
                "90.0": 23098.532704545454,
                "95.0": 23098.532704545454,
                "99.0": 23098.532704545454,
                "99.9": 23098.532704545454,
                "99.99": 23098.532704545454,
                "99.999": 23098.532704545454,
                "99.9999": 23098.532704545454,
                "100.0": 23098.532704545454
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23098.532704545454,
                    22580.95328888889,
                    22480.480888888887
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "100",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 11353.770327710678,
            "scoreError": 3368.9498483925813,
            "scoreConfidence": [
                7984.820479318096,
                14722.72017610326
            ],
            "scorePercentiles": {
                "0.0": 11161.262648351649,
                "50.0": 11370.612539325843,
                "90.0": 11529.435795454545,
                "95.0": 11529.435795454545,
                "99.0": 11529.435795454545,
                "99.9": 11529.435795454545,
                "99.99": 11529.435795454545,
                "99.999": 11529.435795454545,
                "99.9999": 11529.435795454545,
                "100.0": 11529.435795454545
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11370.612539325843,
                    11161.262648351649,
                    11529.435795454545
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "100",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 11444.433866933572,
            "scoreError": 2494.039538200667,
            "scoreConfidence": [
                8950.394328732906,
                13938.473405134238
            ],
            "scorePercentiles": {
                "0.0": 11340.087258426965,
                "50.0": 11394.027606741573,
                "90.0": 11599.186735632184,
                "95.0": 11599.186735632184,
                "99.0": 11599.186735632184,
                "99.9": 11599.186735632184,
                "99.99": 11599.186735632184,
                "99.999": 11599.186735632184,
                "99.9999": 11599.186735632184,
                "100.0": 11599.186735632184
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11340.087258426965,
                    11394.027606741573,
                    11599.186735632184
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "500",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 11251.58275260758,
            "scoreError": 3183.255254248297,
            "scoreConfidence": [
                8068.327498359282,
                14434.838006855876
            ],
            "scorePercentiles": {
                "0.0": 11075.529318681318,
                "50.0": 11254.763177777777,
                "90.0": 11424.455761363637,
                "95.0": 11424.455761363637,
                "99.0": 11424.455761363637,
                "99.9": 11424.455761363637,
                "99.99": 11424.455761363637,
                "99.999": 11424.455761363637,
                "99.9999": 11424.455761363637,
                "100.0": 11424.455761363637
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11075.529318681318,
                    11424.455761363637,
                    11254.763177777777
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "500",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 11350.166909617712,
            "scoreError": 2322.9472838543,
            "scoreConfidence": [
                9027.219625763411,
                13673.114193472013
            ],
            "scorePercentiles": {
                "0.0": 11205.470188888889,
                "50.0": 11399.938483146067,
                "90.0": 11445.092056818181,
                "95.0": 11445.092056818181,
                "99.0": 11445.092056818181,
                "99.9": 11445.092056818181,
                "99.99": 11445.092056818181,
                "99.999": 11445.092056818181,
                "99.9999": 11445.092056818181,
                "100.0": 11445.092056818181
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11445.092056818181,
                    11205.470188888889,
                    11399.938483146067
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "1000",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 12519.96511251758,
            "scoreError": 2282.868909268262,
            "scoreConfidence": [
                10237.096203249319,
                14802.834021785842
            ],
            "scorePercentiles": {
                "0.0": 12437.879444444445,
                "50.0": 12458.030222222222,
                "90.0": 12663.985670886075,
                "95.0": 12663.985670886075,
                "99.0": 12663.985670886075,
                "99.9": 12663.985670886075,
                "99.99": 12663.985670886075,
                "99.999": 12663.985670886075,
                "99.9999": 12663.985670886075,
                "100.0": 12663.985670886075
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    12458.030222222222,
                    12437.879444444445,
                    12663.985670886075
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "1000",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 12556.359109979423,
            "scoreError": 2552.032806361274,
            "scoreConfidence": [
                10004.326303618149,
                15108.391916340697
            ],
            "scorePercentiles": {
                "0.0": 12407.31660493827,
                "50.0": 12576.957175,
                "90.0": 12684.80355,
                "95.0": 12684.80355,
                "99.0": 12684.80355,
                "99.9": 12684.80355,
                "99.99": 12684.80355,
                "99.999": 12684.80355,
                "99.9999": 12684.80355,
                "100.0": 12684.80355
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    12407.31660493827,
                    12576.957175,
                    12684.80355
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "100",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 22940.4149489899,
            "scoreError": 6046.0965796832725,
            "scoreConfidence": [
                16894.318369306628,
                28986.51152867317
            ],
            "scorePercentiles": {
                "0.0": 22563.877733333335,
                "50.0": 23069.561954545454,
                "90.0": 23187.80515909091,
                "95.0": 23187.80515909091,
                "99.0": 23187.80515909091,
                "99.9": 23187.80515909091,
                "99.99": 23187.80515909091,
                "99.999": 23187.80515909091,
                "99.9999": 23187.80515909091,
                "100.0": 23187.80515909091
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23187.80515909091,
                    22563.877733333335,
                    23069.561954545454
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "100",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 23162.530738195914,
            "scoreError": 3863.3536381750732,
            "scoreConfidence": [
                19299.17710002084,
                27025.88437637099
            ],
            "scorePercentiles": {
                "0.0": 22945.956954545454,
                "50.0": 23172.50381818182,
                "90.0": 23369.131441860463,
                "95.0": 23369.131441860463,
                "99.0": 23369.131441860463,
                "99.9": 23369.131441860463,
                "99.99": 23369.131441860463,
                "99.999": 23369.131441860463,
                "99.9999": 23369.131441860463,
                "100.0": 23369.131441860463
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23172.50381818182,
                    22945.956954545454,
                    23369.131441860463
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "500",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 22873.500424242422,
            "scoreError": 1907.4013463594324,
            "scoreConfidence": [
                20966.09907788299,
                24780.901770601853
            ],
            "scorePercentiles": {
                "0.0": 22779.134613636365,
                "50.0": 22855.474022727274,
                "90.0": 22985.892636363635,
                "95.0": 22985.892636363635,
                "99.0": 22985.892636363635,
                "99.9": 22985.892636363635,
                "99.99": 22985.892636363635,
                "99.999": 22985.892636363635,
                "99.9999": 22985.892636363635,
                "100.0": 22985.892636363635
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    22779.134613636365,
                    22855.474022727274,
                    22985.892636363635
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "500",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 23345.85019733045,
            "scoreError": 15457.497273501882,
            "scoreConfidence": [
                7888.352923828566,
                38803.347470832334
            ],
            "scorePercentiles": {
                "0.0": 22785.154666666665,
                "50.0": 22931.867568181817,
                "90.0": 24320.528357142855,
                "95.0": 24320.528357142855,
                "99.0": 24320.528357142855,
                "99.9": 24320.528357142855,
                "99.99": 24320.528357142855,
                "99.999": 24320.528357142855,
                "99.9999": 24320.528357142855,
                "100.0": 24320.528357142855
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    22931.867568181817,
                    24320.528357142855,
                    22785.154666666665
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "1000",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 24223.56757142857,
            "scoreError": 3368.6226487746244,
            "scoreConfidence": [
                20854.944922653947,
                27592.190220203196
            ],
            "scorePercentiles": {
                "0.0": 24052.76388095238,
                "50.0": 24198.45442857143,
                "90.0": 24419.484404761904,
                "95.0": 24419.484404761904,
                "99.0": 24419.484404761904,
                "99.9": 24419.484404761904,
                "99.99": 24419.484404761904,
                "99.999": 24419.484404761904,
                "99.9999": 24419.484404761904,
                "100.0": 24419.484404761904
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    24198.45442857143,
                    24419.484404761904,
                    24052.76388095238
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "1000",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 24045.2183815466,
            "scoreError": 10707.053673208806,
            "scoreConfidence": [
                13338.164708337796,
                34752.272054755405
            ],
            "scorePercentiles": {
                "0.0": 23599.738627906976,
                "50.0": 23825.690906976743,
                "90.0": 24710.225609756097,
                "95.0": 24710.225609756097,
                "99.0": 24710.225609756097,
                "99.9": 24710.225609756097,
                "99.99": 24710.225609756097,
                "99.999": 24710.225609756097,
                "99.9999": 24710.225609756097,
                "100.0": 24710.225609756097
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23599.738627906976,
                    24710.225609756097,
                    23825.690906976743
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "100",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 11425.940968590397,
            "scoreError": 866.543208389422,
            "scoreConfidence": [
                10559.397760200976,
                12292.484176979819
            ],
            "scorePercentiles": {
                "0.0": 11371.097292134831,
                "50.0": 11452.91190909091,
                "90.0": 11453.813704545455,
                "95.0": 11453.813704545455,
                "99.0": 11453.813704545455,
                "99.9": 11453.813704545455,
                "99.99": 11453.813704545455,
                "99.999": 11453.813704545455,
                "99.9999": 11453.813704545455,
                "100.0": 11453.813704545455
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11452.91190909091,
                    11371.097292134831,
                    11453.813704545455
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "100",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 11559.31226567398,
            "scoreError": 1106.1074616012768,
            "scoreConfidence": [
                10453.204804072702,
                12665.419727275257
            ],
            "scorePercentiles": {
                "0.0": 11501.81665909091,
                "50.0": 11553.467793103448,
                "90.0": 11622.652344827586,
                "95.0": 11622.652344827586,
                "99.0": 11622.652344827586,
                "99.9": 11622.652344827586,
                "99.99": 11622.652344827586,
                "99.999": 11622.652344827586,
                "99.9999": 11622.652344827586,
                "100.0": 11622.652344827586
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11622.652344827586,
                    11501.81665909091,
                    11553.467793103448
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "500",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 11407.51400093633,
            "scoreError": 2029.3475375222745,
            "scoreConfidence": [
                9378.166463414054,
                13436.861538458605
            ],
            "scorePercentiles": {
                "0.0": 11310.790752808989,
                "50.0": 11382.685659090908,
                "90.0": 11529.065590909091,
                "95.0": 11529.065590909091,
                "99.0": 11529.065590909091,
                "99.9": 11529.065590909091,
                "99.99": 11529.065590909091,
                "99.999": 11529.065590909091,
                "99.9999": 11529.065590909091,
                "100.0": 11529.065590909091
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11310.790752808989,
                    11529.065590909091,
                    11382.685659090908
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "500",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 11516.277760859273,
            "scoreError": 2464.5833445679186,
            "scoreConfidence": [
                9051.694416291355,
                13980.861105427191
            ],
            "scorePercentiles": {
                "0.0": 11360.30670786517,
                "50.0": 11592.105413793104,
                "90.0": 11596.42116091954,
                "95.0": 11596.42116091954,
                "99.0": 11596.42116091954,
                "99.9": 11596.42116091954,
                "99.99": 11596.42116091954,
                "99.999": 11596.42116091954,
                "99.9999": 11596.42116091954,
                "100.0": 11596.42116091954
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11592.105413793104,
                    11596.42116091954,
                    11360.30670786517
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "1000",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 12754.981524609166,
            "scoreError": 3486.822080130049,
            "scoreConfidence": [
                9268.159444479117,
                16241.803604739214
            ],
            "scorePercentiles": {
                "0.0": 12603.2699625,
                "50.0": 12692.034316455696,
                "90.0": 12969.640294871795,
                "95.0": 12969.640294871795,
                "99.0": 12969.640294871795,
                "99.9": 12969.640294871795,
                "99.99": 12969.640294871795,
                "99.999": 12969.640294871795,
                "99.9999": 12969.640294871795,
                "100.0": 12969.640294871795
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    12603.2699625,
                    12969.640294871795,
                    12692.034316455696
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "1000",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 12743.71187501187,
            "scoreError": 4471.013979432363,
            "scoreConfidence": [
                8272.697895579506,
                17214.725854444234
            ],
            "scorePercentiles": {
                "0.0": 12527.750074074074,
                "50.0": 12693.3250125,
                "90.0": 13010.06053846154,
                "95.0": 13010.06053846154,
                "99.0": 13010.06053846154,
                "99.9": 13010.06053846154,
                "99.99": 13010.06053846154,
                "99.999": 13010.06053846154,
                "99.9999": 13010.06053846154,
                "100.0": 13010.06053846154
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    13010.06053846154,
                    12693.3250125,
                    12527.750074074074
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "100",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 22818.924555892256,
            "scoreError": 1880.0790113606588,
            "scoreConfidence": [
                20938.845544531596,
                24699.003567252916
            ],
            "scorePercentiles": {
                "0.0": 22733.498977777777,
                "50.0": 22789.895644444445,
                "90.0": 22933.379045454545,
                "95.0": 22933.379045454545,
                "99.0": 22933.379045454545,
                "99.9": 22933.379045454545,
                "99.99": 22933.379045454545,
                "99.999": 22933.379045454545,
                "99.9999": 22933.379045454545,
                "100.0": 22933.379045454545
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    22733.498977777777,
                    22933.379045454545,
                    22789.895644444445
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "100",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 23228.929030831572,
            "scoreError": 4826.888502494368,
            "scoreConfidence": [
                18402.040528337202,
                28055.817533325942
            ],
            "scorePercentiles": {
                "0.0": 22933.177204545456,
                "50.0": 23310.474818181818,
                "90.0": 23443.135069767442,
                "95.0": 23443.135069767442,
                "99.0": 23443.135069767442,
                "99.9": 23443.135069767442,
                "99.99": 23443.135069767442,
                "99.999": 23443.135069767442,
                "99.9999": 23443.135069767442,
                "100.0": 23443.135069767442
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    22933.177204545456,
                    23443.135069767442,
                    23310.474818181818
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "500",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 23601.5587715024,
            "scoreError": 9231.126865403989,
            "scoreConfidence": [
                14370.431906098413,
                32832.68563690639
            ],
            "scorePercentiles": {
                "0.0": 23300.774302325583,
                "50.0": 23318.163488372094,
                "90.0": 24185.738523809523,
                "95.0": 24185.738523809523,
                "99.0": 24185.738523809523,
                "99.9": 24185.738523809523,
                "99.99": 24185.738523809523,
                "99.999": 24185.738523809523,
                "99.9999": 24185.738523809523,
                "100.0": 24185.738523809523
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23300.774302325583,
                    24185.738523809523,
                    23318.163488372094
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "500",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 23013.130757575756,
            "scoreError": 1769.2375452357396,
            "scoreConfidence": [
                21243.893212340015,
                24782.368302811497
            ],
            "scorePercentiles": {
                "0.0": 22948.772,
                "50.0": 22965.949113636365,
                "90.0": 23124.67115909091,
                "95.0": 23124.67115909091,
                "99.0": 23124.67115909091,
                "99.9": 23124.67115909091,
                "99.99": 23124.67115909091,
                "99.999": 23124.67115909091,
                "99.9999": 23124.67115909091,
                "100.0": 23124.67115909091
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23124.67115909091,
                    22965.949113636365,
                    22948.772
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "1000",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 23922.452552971576,
            "scoreError": 8262.5420281921,
            "scoreConfidence": [
                15659.910524779476,
                32184.994581163675
            ],
            "scorePercentiles": {
                "0.0": 23399.491325581395,
                "50.0": 24183.630476190476,
                "90.0": 24184.235857142856,
                "95.0": 24184.235857142856,
                "99.0": 24184.235857142856,
                "99.9": 24184.235857142856,
                "99.99": 24184.235857142856,
                "99.999": 24184.235857142856,
                "99.9999": 24184.235857142856,
                "100.0": 24184.235857142856
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23399.491325581395,
                    24184.235857142856,
                    24183.630476190476
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "1000",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 24265.263647966578,
            "scoreError": 8541.02467824649,
            "scoreConfidence": [
                15724.238969720089,
                32806.28832621306
            ],
            "scorePercentiles": {
                "0.0": 23795.91269767442,
                "50.0": 24267.649904761904,
                "90.0": 24732.228341463415,
                "95.0": 24732.228341463415,
                "99.0": 24732.228341463415,
                "99.9": 24732.228341463415,
                "99.99": 24732.228341463415,
                "99.999": 24732.228341463415,
                "99.9999": 24732.228341463415,
                "100.0": 24732.228341463415
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    24267.649904761904,
                    24732.228341463415,
                    23795.91269767442
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "100",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 11528.25634190021,
            "scoreError": 2109.6100484896474,
            "scoreConfidence": [
                9418.646293410564,
                13637.866390389858
            ],
            "scorePercentiles": {
                "0.0": 11400.920382022472,
                "50.0": 11557.130896551724,
                "90.0": 11626.717747126437,
                "95.0": 11626.717747126437,
                "99.0": 11626.717747126437,
                "99.9": 11626.717747126437,
                "99.99": 11626.717747126437,
                "99.999": 11626.717747126437,
                "99.9999": 11626.717747126437,
                "100.0": 11626.717747126437
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11400.920382022472,
                    11626.717747126437,
                    11557.130896551724
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "100",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 11304.084754908014,
            "scoreError": 2525.0817189573195,
            "scoreConfidence": [
                8779.003035950695,
                13829.166473865333
            ],
            "scorePercentiles": {
                "0.0": 11145.19321978022,
                "50.0": 11368.632415730337,
                "90.0": 11398.428629213484,
                "95.0": 11398.428629213484,
                "99.0": 11398.428629213484,
                "99.9": 11398.428629213484,
                "99.99": 11398.428629213484,
                "99.999": 11398.428629213484,
                "99.9999": 11398.428629213484,
                "100.0": 11398.428629213484
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11145.19321978022,
                    11368.632415730337,
                    11398.428629213484
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "500",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 11327.504948404458,
            "scoreError": 3058.269864885755,
            "scoreConfidence": [
                8269.235083518703,
                14385.774813290212
            ],
            "scorePercentiles": {
                "0.0": 11170.363855555555,
                "50.0": 11308.19191011236,
                "90.0": 11503.959079545455,
                "95.0": 11503.959079545455,
                "99.0": 11503.959079545455,
                "99.9": 11503.959079545455,
                "99.99": 11503.959079545455,
                "99.999": 11503.959079545455,
                "99.9999": 11503.959079545455,
                "100.0": 11503.959079545455
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11503.959079545455,
                    11308.19191011236,
                    11170.363855555555
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "500",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 11428.208728991061,
            "scoreError": 3108.235906155498,
            "scoreConfidence": [
                8319.972822835563,
                14536.44463514656
            ],
            "scorePercentiles": {
                "0.0": 11237.597911111112,
                "50.0": 11481.353,
                "90.0": 11565.67527586207,
                "95.0": 11565.67527586207,
                "99.0": 11565.67527586207,
                "99.9": 11565.67527586207,
                "99.99": 11565.67527586207,
                "99.999": 11565.67527586207,
                "99.9999": 11565.67527586207,
                "100.0": 11565.67527586207
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11565.67527586207,
                    11481.353,
                    11237.597911111112
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "1000",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 12653.895715006336,
            "scoreError": 6888.424222039019,
            "scoreConfidence": [
                5765.471492967317,
                19542.319937045355
            ],
            "scorePercentiles": {
                "0.0": 12318.936231707317,
                "50.0": 12579.680225,
                "90.0": 13063.070688311689,
                "95.0": 13063.070688311689,
                "99.0": 13063.070688311689,
                "99.9": 13063.070688311689,
                "99.99": 13063.070688311689,
                "99.999": 13063.070688311689,
                "99.9999": 13063.070688311689,
                "100.0": 13063.070688311689
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    13063.070688311689,
                    12318.936231707317,
                    12579.680225
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "1000",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 12573.734343756514,
            "scoreError": 6069.96124064877,
            "scoreConfidence": [
                6503.773103107744,
                18643.695584405286
            ],
            "scorePercentiles": {
                "0.0": 12354.705085365853,
                "50.0": 12409.901304878049,
                "90.0": 12956.59664102564,
                "95.0": 12956.59664102564,
                "99.0": 12956.59664102564,
                "99.9": 12956.59664102564,
                "99.99": 12956.59664102564,
                "99.999": 12956.59664102564,
                "99.9999": 12956.59664102564,
                "100.0": 12956.59664102564
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    12956.59664102564,
                    12354.705085365853,
                    12409.901304878049
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "100",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 22945.62478030303,
            "scoreError": 3576.04461480277,
            "scoreConfidence": [
                19369.58016550026,
                26521.6693951058
            ],
            "scorePercentiles": {
                "0.0": 22813.569977272728,
                "50.0": 22852.45715909091,
                "90.0": 23170.847204545455,
                "95.0": 23170.847204545455,
                "99.0": 23170.847204545455,
                "99.9": 23170.847204545455,
                "99.99": 23170.847204545455,
                "99.999": 23170.847204545455,
                "99.9999": 23170.847204545455,
                "100.0": 23170.847204545455
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23170.847204545455,
                    22852.45715909091,
                    22813.569977272728
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "100",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 22915.805352693602,
            "scoreError": 6493.70083769828,
            "scoreConfidence": [
                16422.10451499532,
                29409.506190391883
            ],
            "scorePercentiles": {
                "0.0": 22523.098444444444,
                "50.0": 23007.132977272726,
                "90.0": 23217.184636363636,
                "95.0": 23217.184636363636,
                "99.0": 23217.184636363636,
                "99.9": 23217.184636363636,
                "99.99": 23217.184636363636,
                "99.999": 23217.184636363636,
                "99.9999": 23217.184636363636,
                "100.0": 23217.184636363636
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23217.184636363636,
                    23007.132977272726,
                    22523.098444444444
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "500",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 23037.637712121214,
            "scoreError": 3234.445219718367,
            "scoreConfidence": [
                19803.192492402846,
                26272.08293183958
            ],
            "scorePercentiles": {
                "0.0": 22833.692977272727,
                "50.0": 23124.216681818183,
                "90.0": 23155.003477272727,
                "95.0": 23155.003477272727,
                "99.0": 23155.003477272727,
                "99.9": 23155.003477272727,
                "99.99": 23155.003477272727,
                "99.999": 23155.003477272727,
                "99.9999": 23155.003477272727,
                "100.0": 23155.003477272727
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    22833.692977272727,
                    23155.003477272727,
                    23124.216681818183
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "500",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 22949.72877222222,
            "scoreError": 6230.545059218773,
            "scoreConfidence": [
                16719.183713003447,
                29180.273831440994
            ],
            "scorePercentiles": {
                "0.0": 22723.600066666666,
                "50.0": 22783.0015,
                "90.0": 23342.58475,
                "95.0": 23342.58475,
                "99.0": 23342.58475,
                "99.9": 23342.58475,
                "99.99": 23342.58475,
                "99.999": 23342.58475,
                "99.9999": 23342.58475,
                "100.0": 23342.58475
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    22783.0015,
                    23342.58475,
                    22723.600066666666
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "1000",
            "c_nanos": "1000"
        },
        "primaryMetric": {
            "score": 24103.318873664117,
            "scoreError": 8959.537306864262,
            "scoreConfidence": [
                15143.781566799855,
                33062.85618052838
            ],
            "scorePercentiles": {
                "0.0": 23570.025674418604,
                "50.0": 24202.99119047619,
                "90.0": 24536.93975609756,
                "95.0": 24536.93975609756,
                "99.0": 24536.93975609756,
                "99.9": 24536.93975609756,
                "99.99": 24536.93975609756,
                "99.999": 24536.93975609756,
                "99.9999": 24536.93975609756,
                "100.0": 24536.93975609756
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    24202.99119047619,
                    24536.93975609756,
                    23570.025674418604
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.ThreeParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "1000",
            "c_nanos": "3000"
        },
        "primaryMetric": {
            "score": 24098.46391269841,
            "scoreError": 6669.229641761559,
            "scoreConfidence": [
                17429.234270936853,
                30767.69355445997
            ],
            "scorePercentiles": {
                "0.0": 23838.105119047617,
                "50.0": 23940.899904761904,
                "90.0": 24516.386714285713,
                "95.0": 24516.386714285713,
                "99.0": 24516.386714285713,
                "99.9": 24516.386714285713,
                "99.99": 24516.386714285713,
                "99.999": 24516.386714285713,
                "99.9999": 24516.386714285713,
                "100.0": 24516.386714285713
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    24516.386714285713,
                    23838.105119047617,
                    23940.899904761904
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "100"
        },
        "primaryMetric": {
            "score": 11610.32561302682,
            "scoreError": 130.33248801710184,
            "scoreConfidence": [
                11479.993125009718,
                11740.658101043922
            ],
            "scorePercentiles": {
                "0.0": 11605.439965517242,
                "50.0": 11607.012218390804,
                "90.0": 11618.524655172414,
                "95.0": 11618.524655172414,
                "99.0": 11618.524655172414,
                "99.9": 11618.524655172414,
                "99.99": 11618.524655172414,
                "99.999": 11618.524655172414,
                "99.9999": 11618.524655172414,
                "100.0": 11618.524655172414
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11607.012218390804,
                    11605.439965517242,
                    11618.524655172414
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "500"
        },
        "primaryMetric": {
            "score": 11684.111794309372,
            "scoreError": 2522.6068221082764,
            "scoreConfidence": [
                9161.504972201095,
                14206.71861641765
            ],
            "scorePercentiles": {
                "0.0": 11525.119534090909,
                "50.0": 11750.942790697674,
                "90.0": 11776.273058139535,
                "95.0": 11776.273058139535,
                "99.0": 11776.273058139535,
                "99.9": 11776.273058139535,
                "99.99": 11776.273058139535,
                "99.999": 11776.273058139535,
                "99.9999": 11776.273058139535,
                "100.0": 11776.273058139535
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11525.119534090909,
                    11776.273058139535,
                    11750.942790697674
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "1000"
        },
        "primaryMetric": {
            "score": 12696.711855913634,
            "scoreError": 5564.835673023877,
            "scoreConfidence": [
                7131.876182889758,
                18261.54752893751
            ],
            "scorePercentiles": {
                "0.0": 12482.813209876544,
                "50.0": 12561.324111111111,
                "90.0": 13045.998246753246,
                "95.0": 13045.998246753246,
                "99.0": 13045.998246753246,
                "99.9": 13045.998246753246,
                "99.99": 13045.998246753246,
                "99.999": 13045.998246753246,
                "99.9999": 13045.998246753246,
                "100.0": 13045.998246753246
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    12561.324111111111,
                    13045.998246753246,
                    12482.813209876544
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "100"
        },
        "primaryMetric": {
            "score": 22955.060984848486,
            "scoreError": 3458.2137530957257,
            "scoreConfidence": [
                19496.84723175276,
                26413.27473794421
            ],
            "scorePercentiles": {
                "0.0": 22770.465954545456,
                "50.0": 22945.50015909091,
                "90.0": 23149.216840909092,
                "95.0": 23149.216840909092,
                "99.0": 23149.216840909092,
                "99.9": 23149.216840909092,
                "99.99": 23149.216840909092,
                "99.999": 23149.216840909092,
                "99.9999": 23149.216840909092,
                "100.0": 23149.216840909092
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23149.216840909092,
                    22770.465954545456,
                    22945.50015909091
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "500"
        },
        "primaryMetric": {
            "score": 22900.011934175087,
            "scoreError": 3459.1694252504058,
            "scoreConfidence": [
                19440.84250892468,
                26359.181359425493
            ],
            "scorePercentiles": {
                "0.0": 22772.01033333333,
                "50.0": 22810.184355555557,
                "90.0": 23117.841113636365,
                "95.0": 23117.841113636365,
                "99.0": 23117.841113636365,
                "99.9": 23117.841113636365,
                "99.99": 23117.841113636365,
                "99.999": 23117.841113636365,
                "99.9999": 23117.841113636365,
                "100.0": 23117.841113636365
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    22810.184355555557,
                    22772.01033333333,
                    23117.841113636365
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "1000"
        },
        "primaryMetric": {
            "score": 24400.31918931475,
            "scoreError": 5411.06149445546,
            "scoreConfidence": [
                18989.25769485929,
                29811.380683770207
            ],
            "scorePercentiles": {
                "0.0": 24077.695047619047,
                "50.0": 24462.102666666666,
                "90.0": 24661.159853658537,
                "95.0": 24661.159853658537,
                "99.0": 24661.159853658537,
                "99.9": 24661.159853658537,
                "99.99": 24661.159853658537,
                "99.999": 24661.159853658537,
                "99.9999": 24661.159853658537,
                "100.0": 24661.159853658537
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    24661.159853658537,
                    24462.102666666666,
                    24077.695047619047
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "100"
        },
        "primaryMetric": {
            "score": 11306.563958801498,
            "scoreError": 284.40417483168994,
            "scoreConfidence": [
                11022.159783969808,
                11590.968133633189
            ],
            "scorePercentiles": {
                "0.0": 11295.186370786518,
                "50.0": 11300.172415730338,
                "90.0": 11324.333089887641,
                "95.0": 11324.333089887641,
                "99.0": 11324.333089887641,
                "99.9": 11324.333089887641,
                "99.99": 11324.333089887641,
                "99.999": 11324.333089887641,
                "99.9999": 11324.333089887641,
                "100.0": 11324.333089887641
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11300.172415730338,
                    11324.333089887641,
                    11295.186370786518
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "500"
        },
        "primaryMetric": {
            "score": 11269.025168872244,
            "scoreError": 1718.905541638377,
            "scoreConfidence": [
                9550.119627233868,
                12987.93071051062
            ],
            "scorePercentiles": {
                "0.0": 11180.60191111111,
                "50.0": 11258.344011235955,
                "90.0": 11368.129584269664,
                "95.0": 11368.129584269664,
                "99.0": 11368.129584269664,
                "99.9": 11368.129584269664,
                "99.99": 11368.129584269664,
                "99.999": 11368.129584269664,
                "99.9999": 11368.129584269664,
                "100.0": 11368.129584269664
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11180.60191111111,
                    11258.344011235955,
                    11368.129584269664
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "1000"
        },
        "primaryMetric": {
            "score": 12402.279690153568,
            "scoreError": 2364.6464453209055,
            "scoreConfidence": [
                10037.633244832661,
                14766.926135474474
            ],
            "scorePercentiles": {
                "0.0": 12265.889292682927,
                "50.0": 12417.107308641975,
                "90.0": 12523.842469135803,
                "95.0": 12523.842469135803,
                "99.0": 12523.842469135803,
                "99.9": 12523.842469135803,
                "99.99": 12523.842469135803,
                "99.999": 12523.842469135803,
                "99.9999": 12523.842469135803,
                "100.0": 12523.842469135803
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    12523.842469135803,
                    12265.889292682927,
                    12417.107308641975
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "100"
        },
        "primaryMetric": {
            "score": 22996.80506060606,
            "scoreError": 1155.3515447216255,
            "scoreConfidence": [
                21841.453515884434,
                24152.156605327687
            ],
            "scorePercentiles": {
                "0.0": 22927.639363636365,
                "50.0": 23010.830522727272,
                "90.0": 23051.945295454545,
                "95.0": 23051.945295454545,
                "99.0": 23051.945295454545,
                "99.9": 23051.945295454545,
                "99.99": 23051.945295454545,
                "99.999": 23051.945295454545,
                "99.9999": 23051.945295454545,
                "100.0": 23051.945295454545
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23010.830522727272,
                    23051.945295454545,
                    22927.639363636365
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "500"
        },
        "primaryMetric": {
            "score": 22826.613083164983,
            "scoreError": 3591.035868485665,
            "scoreConfidence": [
                19235.577214679317,
                26417.648951650648
            ],
            "scorePercentiles": {
                "0.0": 22606.320022222222,
                "50.0": 22888.303977272728,
                "90.0": 22985.21525,
                "95.0": 22985.21525,
                "99.0": 22985.21525,
                "99.9": 22985.21525,
                "99.99": 22985.21525,
                "99.999": 22985.21525,
                "99.9999": 22985.21525,
                "100.0": 22985.21525
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    22606.320022222222,
                    22985.21525,
                    22888.303977272728
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsMultiMethodBenchmark.timer",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "1000"
        },
        "primaryMetric": {
            "score": 24214.159825396826,
            "scoreError": 3439.014251411113,
            "scoreConfidence": [
                20775.145573985712,
                27653.17407680794
            ],
            "scorePercentiles": {
                "0.0": 24041.186214285714,
                "50.0": 24186.218285714287,
                "90.0": 24415.074976190477,
                "95.0": 24415.074976190477,
                "99.0": 24415.074976190477,
                "99.9": 24415.074976190477,
                "99.99": 24415.074976190477,
                "99.999": 24415.074976190477,
                "99.9999": 24415.074976190477,
                "100.0": 24415.074976190477
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    24186.218285714287,
                    24415.074976190477,
                    24041.186214285714
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "100"
        },
        "primaryMetric": {
            "score": 11336.687419457206,
            "scoreError": 4649.283344185821,
            "scoreConfidence": [
                6687.404075271385,
                15985.970763643028
            ],
            "scorePercentiles": {
                "0.0": 11057.422571428571,
                "50.0": 11395.987617977527,
                "90.0": 11556.652068965517,
                "95.0": 11556.652068965517,
                "99.0": 11556.652068965517,
                "99.9": 11556.652068965517,
                "99.99": 11556.652068965517,
                "99.999": 11556.652068965517,
                "99.9999": 11556.652068965517,
                "100.0": 11556.652068965517
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11057.422571428571,
                    11395.987617977527,
                    11556.652068965517
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "500"
        },
        "primaryMetric": {
            "score": 11535.73501936027,
            "scoreError": 5720.97589655387,
            "scoreConfidence": [
                5814.7591228064,
                17256.71091591414
            ],
            "scorePercentiles": {
                "0.0": 11226.346544444445,
                "50.0": 11527.502113636363,
                "90.0": 11853.3564,
                "95.0": 11853.3564,
                "99.0": 11853.3564,
                "99.9": 11853.3564,
                "99.99": 11853.3564,
                "99.999": 11853.3564,
                "99.9999": 11853.3564,
                "100.0": 11853.3564
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    11527.502113636363,
                    11226.346544444445,
                    11853.3564
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "10",
            "b_micros": "1000"
        },
        "primaryMetric": {
            "score": 12737.183650843881,
            "scoreError": 1285.7177986488982,
            "scoreConfidence": [
                11451.465852194982,
                14022.90144949278
            ],
            "scorePercentiles": {
                "0.0": 12674.7315,
                "50.0": 12723.22725,
                "90.0": 12813.592202531645,
                "95.0": 12813.592202531645,
                "99.0": 12813.592202531645,
                "99.9": 12813.592202531645,
                "99.99": 12813.592202531645,
                "99.999": 12813.592202531645,
                "99.9999": 12813.592202531645,
                "100.0": 12813.592202531645
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    12674.7315,
                    12723.22725,
                    12813.592202531645
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "100"
        },
        "primaryMetric": {
            "score": 23269.63947075405,
            "scoreError": 3151.0687311262263,
            "scoreConfidence": [
                20118.570739627823,
                26420.708201880276
            ],
            "scorePercentiles": {
                "0.0": 23084.52225,
                "50.0": 23297.92402272727,
                "90.0": 23426.472139534882,
                "95.0": 23426.472139534882,
                "99.0": 23426.472139534882,
                "99.9": 23426.472139534882,
                "99.99": 23426.472139534882,
                "99.999": 23426.472139534882,
                "99.9999": 23426.472139534882,
                "100.0": 23426.472139534882
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23426.472139534882,
                    23084.52225,
                    23297.92402272727
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "500"
        },
        "primaryMetric": {
            "score": 22994.778410101007,
            "scoreError": 5477.348552225323,
            "scoreConfidence": [
                17517.429857875686,
                28472.12696232633
            ],
            "scorePercentiles": {
                "0.0": 22656.455866666667,
                "50.0": 23098.421590909093,
                "90.0": 23229.457772727274,
                "95.0": 23229.457772727274,
                "99.0": 23229.457772727274,
                "99.9": 23229.457772727274,
                "99.99": 23229.457772727274,
                "99.999": 23229.457772727274,
                "99.9999": 23229.457772727274,
                "100.0": 23229.457772727274
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    23098.421590909093,
                    22656.455866666667,
                    23229.457772727274
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.params.TwoParamsSingleMethodBenchmark.sleep",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 2,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "params": {
            "a_milis": "20",
            "b_micros": "1000"
        },
        "primaryMetric": {
            "score": 24168.271357142858,
            "scoreError": 3306.1404718246336,
            "scoreConfidence": [
                20862.130885318224,
                27474.41182896749
            ],
            "scorePercentiles": {
                "0.0": 23998.644976190477,
                "50.0": 24146.96614285714,
                "90.0": 24359.20295238095,
                "95.0": 24359.20295238095,
                "99.0": 24359.20295238095,
                "99.9": 24359.20295238095,
                "99.99": 24359.20295238095,
                "99.999": 24359.20295238095,
                "99.9999": 24359.20295238095,
                "100.0": 24359.20295238095
            },
            "scoreUnit": "us/op",
            "rawData": [
                [
                    24359.20295238095,
                    23998.644976190477,
                    24146.96614285714
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.ConcatenatedStringBenchmark.pluses",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1232.5640442301003,
            "scoreError": 16.254834602434073,
            "scoreConfidence": [
                1216.3092096276662,
                1248.8188788325344
            ],
            "scorePercentiles": {
                "0.0": 1189.2719891321963,
                "50.0": 1235.4598341426026,
                "90.0": 1257.0834705724762,
                "95.0": 1261.5005451192108,
                "99.0": 1261.7252426633238,
                "99.9": 1261.7252426633238,
                "99.99": 1261.7252426633238,
                "99.999": 1261.7252426633238,
                "99.9999": 1261.7252426633238,
                "100.0": 1261.7252426633238
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    1244.2465968440688,
                    1248.186545432663,
                    1228.5547686779294,
                    1257.231291781064,
                    1241.8561465516923,
                    1189.2719891321963,
                    1239.2650262830512,
                    1218.9390614957422,
                    1261.7252426633238,
                    1255.7530796951846
                ],
                [
                    1251.8965125077725,
                    1226.4607379846957,
                    1238.788461401516,
                    1205.5034845771122,
                    1214.3125356599708,
                    1221.0561142888184,
                    1219.406271258334,
                    1238.7092432460838,
                    1232.2104250391217,
                    1217.9073500816658
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.ConcatenatedStringBenchmark.stringBuffer",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2482.36120971429,
            "scoreError": 43.430925106869964,
            "scoreConfidence": [
                2438.93028460742,
                2525.79213482116
            ],
            "scorePercentiles": {
                "0.0": 2375.4961105196376,
                "50.0": 2493.1303658067354,
                "90.0": 2547.4921392139067,
                "95.0": 2553.1584436515664,
                "99.0": 2553.4197038384445,
                "99.9": 2553.4197038384445,
                "99.99": 2553.4197038384445,
                "99.999": 2553.4197038384445,
                "99.9999": 2553.4197038384445,
                "100.0": 2553.4197038384445
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    2375.4961105196376,
                    2446.0265056253575,
                    2436.1649057363857,
                    2418.634679371835,
                    2442.1190109599233,
                    2443.3248474699194,
                    2511.946343368905,
                    2548.1945001008853,
                    2464.532835886901,
                    2495.0979972908053
                ],
                [
                    2419.8880603037974,
                    2541.170891231101,
                    2517.0577694047647,
                    2553.4197038384445,
                    2520.6997977483325,
                    2510.2283585792716,
                    2531.342048874491,
                    2491.1627343226655,
                    2464.9126767543244,
                    2515.8044168980587
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.ConcatenatedStringBenchmark.stringBuilder",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2577.015618407858,
            "scoreError": 55.45729551206946,
            "scoreConfidence": [
                2521.5583228957885,
                2632.472913919927
            ],
            "scorePercentiles": {
                "0.0": 2486.941141134369,
                "50.0": 2553.4268563158457,
                "90.0": 2664.6842511392715,
                "95.0": 2670.7959652727473,
                "99.0": 2671.0444052381663,
                "99.9": 2671.0444052381663,
                "99.99": 2671.0444052381663,
                "99.999": 2671.0444052381663,
                "99.9999": 2671.0444052381663,
                "100.0": 2671.0444052381663
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    2531.487304788759,
                    2523.7204807587304,
                    2540.7744765983625,
                    2512.5184385360362,
                    2491.251453101397,
                    2565.258757595716,
                    2517.899987633532,
                    2541.594955035975,
                    2514.763970144484,
                    2486.941141134369
                ],
                [
                    2652.1620580246836,
                    2625.989694101358,
                    2666.0756059297814,
                    2624.6275091539055,
                    2632.068777920603,
                    2649.0414329920404,
                    2649.3329927609707,
                    2538.0374688176207,
                    2605.7214578906546,
                    2671.0444052381663
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.StringConstantBenchmark.buildStringWithCharSeperator",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 7870496.7469091145,
            "scoreError": 141377.7070183896,
            "scoreConfidence": [
                7729119.039890725,
                8011874.453927504
            ],
            "scorePercentiles": {
                "0.0": 7630215.947612508,
                "50.0": 7880679.187796734,
                "90.0": 8068046.6466478165,
                "95.0": 8182907.553955266,
                "99.0": 8188825.805588063,
                "99.9": 8188825.805588063,
                "99.99": 8188825.805588063,
                "99.999": 8188825.805588063,
                "99.9999": 8188825.805588063,
                "100.0": 8188825.805588063
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    7720431.373206782,
                    7630215.947612508,
                    7899412.570314197,
                    7861945.805279271,
                    7716381.786655143,
                    7736211.557372259,
                    7699896.049715508,
                    7643161.456714154,
                    7664459.679858834,
                    7953593.97196705
                ],
                [
                    7940223.807878903,
                    8004152.223822337,
                    8046319.510088986,
                    7852299.165351427,
                    8004248.091865736,
                    8188825.805588063,
                    7929946.084688053,
                    8070460.772932131,
                    7805261.53607844,
                    8042487.741192518
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.StringConstantBenchmark.buildStringWithSeperatorAsCharConstant",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 7752286.576676935,
            "scoreError": 65980.15639577831,
            "scoreConfidence": [
                7686306.420281157,
                7818266.733072713
            ],
            "scorePercentiles": {
                "0.0": 7631511.382238919,
                "50.0": 7740542.910718743,
                "90.0": 7887242.876905806,
                "95.0": 7894152.611248321,
                "99.0": 7894332.822979467,
                "99.9": 7894332.822979467,
                "99.99": 7894332.822979467,
                "99.999": 7894332.822979467,
                "99.9999": 7894332.822979467,
                "100.0": 7894332.822979467
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    7631511.382238919,
                    7828931.853383864,
                    7894332.822979467,
                    7755426.550492676,
                    7795776.643123199,
                    7705011.0392727405,
                    7681621.167008719,
                    7759701.04190614,
                    7703593.864627915,
                    7797325.595790911
                ],
                [
                    7701762.833442314,
                    7693586.052831047,
                    7725659.2709448105,
                    7689888.425928756,
                    7761023.276326842,
                    7687562.848050304,
                    7815819.048017407,
                    7890728.588356554,
                    7855871.47384908,
                    7670597.754967043
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.StringConstantBenchmark.buildStringWithSeperatorAsStringConstant",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 6205067.670166187,
            "scoreError": 67229.89454527058,
            "scoreConfidence": [
                6137837.775620917,
                6272297.564711457
            ],
            "scorePercentiles": {
                "0.0": 6083733.860085232,
                "50.0": 6225314.314084283,
                "90.0": 6306115.480493111,
                "95.0": 6348042.890157182,
                "99.0": 6350023.939210631,
                "99.9": 6350023.939210631,
                "99.99": 6350023.939210631,
                "99.999": 6350023.939210631,
                "99.9999": 6350023.939210631,
                "100.0": 6350023.939210631
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    6265309.402636327,
                    6191509.466830403,
                    6244419.974237843,
                    6100634.504067404,
                    6143235.36683608,
                    6212361.588578753,
                    6267528.181656318,
                    6310402.958141644,
                    6254192.8993548015,
                    6350023.939210631
                ],
                [
                    6095009.541504642,
                    6083733.860085232,
                    6232392.028141737,
                    6228923.813709855,
                    6238639.334971767,
                    6221704.814458711,
                    6251414.915276398,
                    6106577.81617057,
                    6087570.710049601,
                    6215768.287405011
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.StringConstantBenchmark.buildStringWithStringSeperator",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 6197188.513157265,
            "scoreError": 134101.9321180812,
            "scoreConfidence": [
                6063086.581039184,
                6331290.445275347
            ],
            "scorePercentiles": {
                "0.0": 5744866.621647485,
                "50.0": 6232975.8056381615,
                "90.0": 6334923.499356576,
                "95.0": 6338734.586371619,
                "99.0": 6338878.1737786,
                "99.9": 6338878.1737786,
                "99.99": 6338878.1737786,
                "99.999": 6338878.1737786,
                "99.9999": 6338878.1737786,
                "100.0": 6338878.1737786
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    6203865.173613566,
                    5744866.621647485,
                    5857213.8569825655,
                    6281337.135585088,
                    6338878.1737786,
                    6146833.544198183,
                    6104908.628255288,
                    6258439.187212625,
                    6336006.42563899,
                    6258864.24652217
                ],
                [
                    6134078.686476224,
                    6321176.492048626,
                    6224908.424657691,
                    6241043.186618632,
                    6203697.178426477,
                    6325177.162814857,
                    6142755.075427841,
                    6316909.106619925,
                    6307231.317356554,
                    6195580.639263908
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NullIndexBenchmark.arrayWithBooleans",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 29.778437237815126,
            "scoreError": 0.5000274254836085,
            "scoreConfidence": [
                29.278409812331518,
                30.278464663298735
            ],
            "scorePercentiles": {
                "0.0": 29.298313228571427,
                "50.0": 29.762874514705885,
                "90.0": 30.265445326470587,
                "95.0": 30.270317705882352,
                "99.0": 30.270317705882352,
                "99.9": 30.270317705882352,
                "99.99": 30.270317705882352,
                "99.999": 30.270317705882352,
                "99.9999": 30.270317705882352,
                "100.0": 30.270317705882352
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    29.804723735294118,
                    29.298313228571427,
                    29.6054895,
                    29.979263852941177,
                    29.950460588235295
                ],
                [
                    30.221593911764707,
                    29.72102529411765,
                    30.270317705882352,
                    29.559636647058824,
                    29.373547914285716
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NullIndexBenchmark.arrayWithNullIndices",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 91.97057891318181,
            "scoreError": 7.469265511950057,
            "scoreConfidence": [
                84.50131340123176,
                99.43984442513187
            ],
            "scorePercentiles": {
                "0.0": 87.90882425,
                "50.0": 90.16152470833333,
                "90.0": 102.77835316181819,
                "95.0": 103.4627172,
                "99.0": 103.4627172,
                "99.9": 103.4627172,
                "99.99": 103.4627172,
                "99.999": 103.4627172,
                "99.9999": 103.4627172,
                "100.0": 103.4627172
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    94.43166572727273,
                    91.44015963636363,
                    90.55290766666667,
                    103.4627172,
                    88.11490983333333
                ],
                [
                    96.61907681818182,
                    89.77014175,
                    88.90645183333334,
                    88.49893441666667,
                    87.90882425
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NullIndexBenchmark.bitSet",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 148.0109183714286,
            "scoreError": 1.7050609613001355,
            "scoreConfidence": [
                146.30585741012845,
                149.71597933272875
            ],
            "scorePercentiles": {
                "0.0": 146.28545785714286,
                "50.0": 147.93423164285713,
                "90.0": 149.55103502857142,
                "95.0": 149.5961937142857,
                "99.0": 149.5961937142857,
                "99.9": 149.5961937142857,
                "99.99": 149.5961937142857,
                "99.999": 149.5961937142857,
                "99.9999": 149.5961937142857,
                "100.0": 149.5961937142857
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    146.71730842857144,
                    146.28545785714286,
                    147.25779671428572,
                    149.5961937142857,
                    148.81371642857144
                ],
                [
                    147.782458,
                    148.0860052857143,
                    149.14460685714286,
                    147.3052927142857,
                    149.1203477142857
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.PullPushBenchmark.pull",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 7,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 243.54605942000003,
            "scoreError": 16.0116035164753,
            "scoreConfidence": [
                227.53445590352473,
                259.5576629364753
            ],
            "scorePercentiles": {
                "0.0": 237.5001272,
                "50.0": 240.6110997,
                "90.0": 270.32623466,
                "95.0": 273.477416,
                "99.0": 273.477416,
                "99.9": 273.477416,
                "99.99": 273.477416,
                "99.999": 273.477416,
                "99.9999": 273.477416,
                "100.0": 273.477416
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    239.736175,
                    241.1016056,
                    273.477416,
                    239.1817966,
                    239.9877472
                ],
                [
                    241.9656026,
                    241.2879246,
                    237.5001272,
                    240.6090264,
                    240.613173
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.PullPushBenchmark.pullWithoutJit",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 7,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 239.55012202000003,
            "scoreError": 1.9115213789737677,
            "scoreConfidence": [
                237.63860064102627,
                241.4616433989738
            ],
            "scorePercentiles": {
                "0.0": 238.0788256,
                "50.0": 239.4933633,
                "90.0": 241.58047951999998,
                "95.0": 241.6084704,
                "99.0": 241.6084704,
                "99.9": 241.6084704,
                "99.99": 241.6084704,
                "99.999": 241.6084704,
                "99.9999": 241.6084704,
                "100.0": 241.6084704
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    238.9565606,
                    239.617953,
                    241.3285616,
                    241.6084704,
                    238.0913088
                ],
                [
                    238.2492396,
                    238.0788256,
                    240.156854,
                    240.044673,
                    239.3687736
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.PullPushBenchmark.push",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 7,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 170.5596383857143,
            "scoreError": 3.442083303492361,
            "scoreConfidence": [
                167.11755508222194,
                174.00172168920665
            ],
            "scorePercentiles": {
                "0.0": 166.88917285714285,
                "50.0": 169.73436366666667,
                "90.0": 173.77841673333333,
                "95.0": 173.812273,
                "99.0": 173.812273,
                "99.9": 173.812273,
                "99.99": 173.812273,
                "99.999": 173.812273,
                "99.9999": 173.812273,
                "100.0": 173.812273
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    173.13349616666667,
                    166.88917285714285,
                    169.67103616666665,
                    173.47371033333334,
                    171.0632805
                ],
                [
                    169.65940316666666,
                    169.53774833333333,
                    169.79769116666668,
                    168.55857216666666,
                    173.812273
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.PullPushBenchmark.pushWithoutJit",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 7,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 10441.613679700002,
            "scoreError": 122.42873701135396,
            "scoreConfidence": [
                10319.184942688647,
                10564.042416711356
            ],
            "scorePercentiles": {
                "0.0": 10344.985505,
                "50.0": 10436.0417395,
                "90.0": 10577.9716747,
                "95.0": 10584.131862,
                "99.0": 10584.131862,
                "99.9": 10584.131862,
                "99.99": 10584.131862,
                "99.999": 10584.131862,
                "99.9999": 10584.131862,
                "100.0": 10584.131862
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    10424.455566,
                    10345.924433,
                    10356.476119,
                    10344.985505,
                    10420.776923
                ],
                [
                    10453.350306,
                    10584.131862,
                    10515.878181,
                    10522.529989,
                    10447.627913
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.AvgTimeBenchmark.sleep100Milliseconds",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 102.82043561500002,
            "scoreError": 0.4380527159444815,
            "scoreConfidence": [
                102.38238289905554,
                103.2584883309445
            ],
            "scorePercentiles": {
                "0.0": 101.6477005,
                "50.0": 102.83322079999999,
                "90.0": 103.66935758,
                "95.0": 103.88421347,
                "99.0": 103.8923039,
                "99.9": 103.8923039,
                "99.99": 103.8923039,
                "99.999": 103.8923039,
                "99.9999": 103.8923039,
                "100.0": 103.8923039
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    102.645418,
                    103.1191181,
                    102.455062,
                    102.5086898,
                    102.2590581,
                    102.8756742,
                    102.4717682,
                    103.0929708,
                    101.6477005,
                    102.3702121
                ],
                [
                    103.0716888,
                    102.4720276,
                    102.7907674,
                    103.0200517,
                    103.0968525,
                    103.7304953,
                    103.0443723,
                    102.7756994,
                    103.0687816,
                    103.8923039
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.AvgTimeBenchmark.sleep100MillisecondsRandom",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 78.58651684922162,
            "scoreError": 3.2123745126044136,
            "scoreConfidence": [
                75.37414233661721,
                81.79889136182604
            ],
            "scorePercentiles": {
                "0.0": 73.89258057142857,
                "50.0": 77.62722257692307,
                "90.0": 84.35221706730769,
                "95.0": 86.91431970416666,
                "99.0": 87.04268933333333,
                "99.9": 87.04268933333333,
                "99.99": 87.04268933333333,
                "99.999": 87.04268933333333,
                "99.9999": 87.04268933333333,
                "100.0": 87.04268933333333
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    77.79919192307692,
                    79.51373692307692,
                    79.88945446153846,
                    77.45525323076923,
                    73.89258057142857,
                    74.79498735714286,
                    80.57948661538461,
                    75.48975614285715,
                    84.47529675,
                    75.71785342857143
                ],
                [
                    83.24449992307693,
                    87.04268933333333,
                    74.38636614285714,
                    82.18212861538461,
                    79.89691430769231,
                    75.69838835714286,
                    77.33951715384616,
                    81.08515246153846,
                    76.9462645,
                    74.30081878571428
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.AvgTimeBenchmark.sleep50Milliseconds",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 52.83544450236842,
            "scoreError": 0.26916003429968133,
            "scoreConfidence": [
                52.56628446806874,
                53.1046045366681
            ],
            "scorePercentiles": {
                "0.0": 52.11078015,
                "50.0": 52.90217792105263,
                "90.0": 53.19426218947369,
                "95.0": 53.369965113157896,
                "99.0": 53.378549842105265,
                "99.9": 53.378549842105265,
                "99.99": 53.378549842105265,
                "99.999": 53.378549842105265,
                "99.9999": 53.378549842105265,
                "100.0": 53.378549842105265
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    53.378549842105265,
                    52.84163378947368,
                    52.92114668421053,
                    52.89440557894737,
                    52.909950263157896,
                    52.678885421052634,
                    52.4860788,
                    52.8671745,
                    52.95448057894737,
                    52.4831281
                ],
                [
                    52.2588159,
                    53.03835736842105,
                    53.08092452631579,
                    52.8524199,
                    53.071922368421056,
                    52.913831157894734,
                    52.11078015,
                    52.69957975,
                    53.2068552631579,
                    53.059970105263154
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.QuickBenchmark.sleep100Milliseconds",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 0,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 1,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 102.2284532,
            "scoreError": "NaN",
            "scoreConfidence": [
                "NaN",
                "NaN"
            ],
            "scorePercentiles": {
                "0.0": 102.2284532,
                "50.0": 102.2284532,
                "90.0": 102.2284532,
                "95.0": 102.2284532,
                "99.0": 102.2284532,
                "99.9": 102.2284532,
                "99.99": 102.2284532,
                "99.999": 102.2284532,
                "99.9999": 102.2284532,
                "100.0": 102.2284532
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    102.2284532
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.QuickBenchmark.sleep50Milliseconds",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 0,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 1,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 53.00664242105263,
            "scoreError": "NaN",
            "scoreConfidence": [
                "NaN",
                "NaN"
            ],
            "scorePercentiles": {
                "0.0": 53.00664242105263,
                "50.0": 53.00664242105263,
                "90.0": 53.00664242105263,
                "95.0": 53.00664242105263,
                "99.0": 53.00664242105263,
                "99.9": 53.00664242105263,
                "99.99": 53.00664242105263,
                "99.999": 53.00664242105263,
                "99.9999": 53.00664242105263,
                "100.0": 53.00664242105263
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    53.00664242105263
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
]