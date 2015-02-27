var last_update = 'Friday, 27 February, 2015 at 08:30 EST';
var totals_data = 
{
  "mx": {
    "pcr": {
      "total": 2931,
      "unique": 1122
    },
    "extraction": {
      "total": 1136,
      "unique": 1121
    },
    "fims": {
      "total": 1121,
      "unique": 1121
    },
    "assembled": {
      "total": 0,
      "unique": 0
    },
    "sequenced": {
      "total": 2988,
      "unique": 961
    }
  },
  "ke": {
    "pcr": {
      "total": 1657,
      "unique": 524
    },
    "extraction": {
      "total": 719,
      "unique": 526
    },
    "fims": {
      "total": 551,
      "unique": 551
    },
    "assembled": {
      "total": 0,
      "unique": 0
    },
    "sequenced": {
      "total": 1458,
      "unique": 417
    }
  },
  "za": {
    "pcr": {
      "total": 1201,
      "unique": 552
    },
    "extraction": {
      "total": 590,
      "unique": 590
    },
    "fims": {
      "total": 603,
      "unique": 603
    },
    "assembled": {
      "total": 0,
      "unique": 0
    },
    "sequenced": {
      "total": 2327,
      "unique": 533
    }
  }
};
var timeline_data = 
{
  "ke": [
    {
      "content": "KWS_AAM_001 (50)",
      "group": "0",
      "id": "0",
      "start": "2014-08-18"
    },
    {
      "content": "KWS_AAM_002 (48)",
      "group": "0",
      "id": "1",
      "start": "2014-08-19"
    },
    {
      "content": "NMK_EFGJ_P002 (94)",
      "group": "0",
      "id": "2",
      "start": "2014-08-13"
    },
    {
      "content": "NMK_EFGJ_P003 (76)",
      "group": "0",
      "id": "3",
      "start": "2014-08-13"
    },
    {
      "content": "NMK_GK_001 (23)",
      "group": "0",
      "id": "4",
      "start": "2014-11-05"
    },
    {
      "content": "NMK_GK_002 (23)",
      "group": "0",
      "id": "5",
      "start": "2014-11-11"
    },
    {
      "content": "NMK_GK_003 (17)",
      "group": "0",
      "id": "6",
      "start": "2014-11-11"
    },
    {
      "content": "NMK_JSK_001 (23)",
      "group": "0",
      "id": "7",
      "start": "2014-11-05"
    },
    {
      "content": "NMK_JSK_002 (23)",
      "group": "0",
      "id": "8",
      "start": "2014-11-10"
    },
    {
      "content": "NMK_JSK_003 (23)",
      "group": "0",
      "id": "9",
      "start": "2014-11-10"
    },
    {
      "content": "NMK_JSK_004 (23)",
      "group": "0",
      "id": "10",
      "start": "2014-11-10"
    },
    {
      "content": "NMK_JSK_005 (23)",
      "group": "0",
      "id": "11",
      "start": "2014-11-10"
    },
    {
      "content": "NMK_JSK_006 (23)",
      "group": "0",
      "id": "12",
      "start": "2014-11-10"
    },
    {
      "content": "NMK_JSK_007 (19)",
      "group": "0",
      "id": "13",
      "start": "2014-11-10"
    },
    {
      "content": "NMK_PAA_001 (63)",
      "group": "0",
      "id": "14",
      "start": "2014-08-21"
    },
    {
      "content": "KWS_AAM_001_PCR001_LCO1490_HCO2198 (48)",
      "group": "2",
      "id": "15",
      "start": "2014-10-02"
    },
    {
      "content": "KWS_AAM_001_PCR002_LCO1490_HCO2198 (10)",
      "group": "2",
      "id": "16",
      "start": "2014-11-05"
    },
    {
      "content": "KWS_AAM_001_PCR003_LCO1490_HCO2198 (48)",
      "group": "2",
      "id": "17",
      "start": "2014-12-11"
    },
    {
      "content": "KWS_AAM_001_PCR004_VF1d_t1_VR1d_t1 (48)",
      "group": "2",
      "id": "18",
      "start": "2015-01-08"
    },
    {
      "content": "KWS_AAM_001_PCR005_VF1_t1_VR1_t1 (48)",
      "group": "2",
      "id": "19",
      "start": "2015-01-14"
    },
    {
      "content": "KWS_AAM_001_Seq01_LCO1490_F (48)",
      "group": "3",
      "id": "20",
      "start": "2014-10-16"
    },
    {
      "content": "KWS_AAM_001_Seq02_HCO2198_R (48)",
      "group": "3",
      "id": "21",
      "start": "2014-11-16"
    },
    {
      "content": "KWS_AAM_001_X01 (48)",
      "group": "1",
      "id": "22",
      "start": "2014-08-11"
    },
    {
      "content": "KWS_AAM_002_PCR001_LCO1490_HCO2198 (48)",
      "group": "2",
      "id": "23",
      "start": "2014-10-16"
    },
    {
      "content": "KWS_AAM_002_PCR002_LCO1490_HCO2198 (48)",
      "group": "2",
      "id": "24",
      "start": "2014-11-05"
    },
    {
      "content": "KWS_AAM_002_PCR003_LCO1490_HCO2198 (48)",
      "group": "2",
      "id": "25",
      "start": "2014-12-11"
    },
    {
      "content": "KWS_AAM_002_PCR004_VF1d_t1_VR1d_t1 (48)",
      "group": "2",
      "id": "26",
      "start": "2015-01-08"
    },
    {
      "content": "KWS_AAM_002_Seq01_LCO1490_F (48)",
      "group": "3",
      "id": "27",
      "start": "2014-10-16"
    },
    {
      "content": "KWS_AAM_002_Seq02_HCO2198_R (48)",
      "group": "3",
      "id": "28",
      "start": "2014-10-16"
    },
    {
      "content": "KWS_AAM_002_X01 (48)",
      "group": "1",
      "id": "29",
      "start": "2014-10-15"
    },
    {
      "content": "NMK_EWM_002_X01 (24)",
      "group": "1",
      "id": "30",
      "start": "2014-07-28"
    },
    {
      "content": "NMK_EWM_002_PCR01_rbcla-F_rbclr590 (24)",
      "group": "2",
      "id": "31",
      "start": "2014-07-30"
    },
    {
      "content": "NMK_EWM_002_X02 (70)",
      "group": "1",
      "id": "32",
      "start": "2014-10-08"
    },
    {
      "content": "NMK_EWM_003_X01 (48)",
      "group": "1",
      "id": "33",
      "start": "2014-10-08"
    },
    {
      "content": "NMK_EWM_003_X02 (26)",
      "group": "1",
      "id": "34",
      "start": "2014-10-08"
    },
    {
      "content": "NMK_EWM_002_PCR02_rbcla-F_rbclr590 (70)",
      "group": "2",
      "id": "35",
      "start": "2014-08-25"
    },
    {
      "content": "NMK_EWM_003_PCR01_rbcla-F_rbclr590 (48)",
      "group": "2",
      "id": "36",
      "start": "2014-10-08"
    },
    {
      "content": "NMK_EWM_003_PCR02_rbcla-F_rbclr590 (26)",
      "group": "2",
      "id": "37",
      "start": "2014-10-21"
    },
    {
      "content": "NMK_EWM_002_Seq01_rbcla-F (24)",
      "group": "3",
      "id": "38",
      "start": "2014-10-09"
    },
    {
      "content": "NMK_EWM_002_Seq01_Rbclr590 (24)",
      "group": "3",
      "id": "39",
      "start": "2014-10-09"
    },
    {
      "content": "NMK_EWM_003_Seq01_rbcla-F (48)",
      "group": "3",
      "id": "40",
      "start": "2014-10-09"
    },
    {
      "content": "NMK_EWM_002_Seq02_rbcla-F (70)",
      "group": "3",
      "id": "41",
      "start": "2014-10-22"
    },
    {
      "content": "NMK_EWM_002_Seq02_rbclr590 (70)",
      "group": "3",
      "id": "42",
      "start": "2014-10-09"
    },
    {
      "content": "NMK_EWM_003_Seq01_rbclr590 (48)",
      "group": "3",
      "id": "43",
      "start": "2014-10-09"
    },
    {
      "content": "NMK_EWM_003_Seq02_rbcla-F (26)",
      "group": "3",
      "id": "44",
      "start": "2014-10-09"
    },
    {
      "content": "NMK_EWM_003_Seq02_rbclr590 (26)",
      "group": "3",
      "id": "45",
      "start": "2014-10-09"
    },
    {
      "content": "NMK_EWM_002_iX01 (5)",
      "group": "1",
      "id": "46",
      "start": "2014-06-18"
    },
    {
      "content": "NMK_EWM_002_PCR01_ITS2F_ITS3R (5)",
      "group": "2",
      "id": "47",
      "start": "2014-06-14"
    },
    {
      "content": "NMK_EWM_002_Seq01_ITS2F (5)",
      "group": "3",
      "id": "48",
      "start": "2014-10-10"
    },
    {
      "content": "NMK_EWM_002_Seq01_ITS3R (5)",
      "group": "3",
      "id": "49",
      "start": "2014-10-10"
    },
    {
      "content": "NMK_EWM_003_iX01 (10)",
      "group": "1",
      "id": "50",
      "start": "2014-06-18"
    },
    {
      "content": "NMK_EWM_003_PCR01_ITS2F_ITS3R (10)",
      "group": "2",
      "id": "51",
      "start": "2014-07-14"
    },
    {
      "content": "NMK_EWM_003_Seq01_ITS2F (10)",
      "group": "3",
      "id": "52",
      "start": "2014-10-10"
    },
    {
      "content": "NMK_EWM_003_Seq01_ITS3R (10)",
      "group": "3",
      "id": "53",
      "start": "2014-10-10"
    },
    {
      "content": "NMK_EWM_002_iX02 (24)",
      "group": "1",
      "id": "54",
      "start": "2014-10-22"
    },
    {
      "content": "NMK_EWM_002_PCR02_ITS2F_ITS3R (24)",
      "group": "2",
      "id": "55",
      "start": "2014-07-14"
    },
    {
      "content": "NMK_EWM_002_Seq02_ITS2F (24)",
      "group": "3",
      "id": "56",
      "start": "2014-10-13"
    },
    {
      "content": "NMK_EWM_002_Seq02_ITS3R (24)",
      "group": "3",
      "id": "57",
      "start": "2014-10-13"
    },
    {
      "content": "NMK_EWM_003_iX02 (10)",
      "group": "1",
      "id": "58",
      "start": "2014-06-18"
    },
    {
      "content": "NMK_EWM_003_PCR02_ITS2F_ITS3R (10)",
      "group": "2",
      "id": "59",
      "start": "2014-10-03"
    },
    {
      "content": "NMK_EWM_003_Seq02_ITS2F (10)",
      "group": "3",
      "id": "60",
      "start": "2014-10-15"
    },
    {
      "content": "NMK_EWM_003_Seq02_ITS3R (10)",
      "group": "3",
      "id": "61",
      "start": "2014-10-15"
    },
    {
      "content": "NMK_PAA_001_X01 (63)",
      "group": "1",
      "id": "62",
      "start": "2014-07-02"
    },
    {
      "content": "NMK_PAA_001_PCR01_LC01409_HCO2198 (10)",
      "group": "2",
      "id": "63",
      "start": "2014-07-14"
    },
    {
      "content": "NMK_EWM_002_X03 (4)",
      "group": "1",
      "id": "64",
      "start": "2014-11-04"
    },
    {
      "content": "NMK_EWM_002_PCR03_rbcla-F_rbclR590 (4)",
      "group": "2",
      "id": "65",
      "start": "2014-11-04"
    },
    {
      "content": "NMK_EWM_003_iX03 (65)",
      "group": "1",
      "id": "66",
      "start": "2014-11-04"
    },
    {
      "content": "NMK_EWM_003_PCR03_ITS2F_ITS3R (65)",
      "group": "2",
      "id": "67",
      "start": "2014-11-04"
    },
    {
      "content": "NMK_EWM_003_Seq03_ITS2F (60)",
      "group": "3",
      "id": "68",
      "start": "2014-11-12"
    },
    {
      "content": "NMK_EWM_003_Seq03_ITS3R (60)",
      "group": "3",
      "id": "69",
      "start": "2014-11-12"
    },
    {
      "content": "NMK_EWM_002_iX03 (69)",
      "group": "1",
      "id": "70",
      "start": "2014-11-04"
    },
    {
      "content": "NMK_EWM_002_PCR03_ITS2F_ITS3R (69)",
      "group": "2",
      "id": "71",
      "start": "2014-11-04"
    },
    {
      "content": "NMK_EWM_002_Seq03_ITS2F (60)",
      "group": "3",
      "id": "72",
      "start": "2014-11-12"
    },
    {
      "content": "NMK_EWM_002_Seq03_ITS3R (60)",
      "group": "3",
      "id": "73",
      "start": "2014-11-12"
    },
    {
      "content": "NMK_EWM_002_Seq03_rbcla-F (4)",
      "group": "3",
      "id": "74",
      "start": "2014-11-12"
    },
    {
      "content": "NMK_EWM_002_Seq03_rbclr590 (4)",
      "group": "3",
      "id": "75",
      "start": "2014-11-12"
    },
    {
      "content": "NMK_PAA_001_PCR02_LCO1490_HCO2198 (11)",
      "group": "2",
      "id": "76",
      "start": "2014-11-20"
    },
    {
      "content": "NMK_PAA_001_PCR03_VF1_T1_VR1_T1 (32)",
      "group": "2",
      "id": "77",
      "start": "2014-10-16"
    },
    {
      "content": "NMK_PAA_001_PCR04_dgLCO1490_dgHCO2198 (3)",
      "group": "2",
      "id": "78",
      "start": "2014-11-11"
    },
    {
      "content": "NMK_PAA_001_PCR05_LCO1490_HCO2198 (14)",
      "group": "2",
      "id": "79",
      "start": "2014-11-11"
    },
    {
      "content": "NMK_PAA_001_PCR06_VF1_T1_VR1_T1 (2)",
      "group": "2",
      "id": "80",
      "start": "2014-11-11"
    },
    {
      "content": "NMK_PAA_001_Seq01_LCO1490 (11)",
      "group": "3",
      "id": "81",
      "start": "2014-11-20"
    },
    {
      "content": "NMK_PAA_001_Seq01_HCO2198 (11)",
      "group": "3",
      "id": "82",
      "start": "2014-11-20"
    },
    {
      "content": "NMK_PAA_001_Seq02_VF1_T1 (30)",
      "group": "3",
      "id": "83",
      "start": "2014-10-17"
    },
    {
      "content": "NMK_PAA_001_Seq02_VR1_T1 (30)",
      "group": "3",
      "id": "84",
      "start": "2014-10-17"
    },
    {
      "content": "NMK_EWM_003_X03 (8)",
      "group": "1",
      "id": "85",
      "start": "2014-10-10"
    },
    {
      "content": "NMK_EWM_003_PCR03_Rbcla-F_RbclR590 (8)",
      "group": "2",
      "id": "86",
      "start": "2014-11-10"
    },
    {
      "content": "NMK_EWM_003_Seq03_Rbcla-F (8)",
      "group": "3",
      "id": "87",
      "start": "2014-11-12"
    },
    {
      "content": "NMK_EWM_003_Seq03_RbclR590 (8)",
      "group": "3",
      "id": "88",
      "start": "2014-11-12"
    },
    {
      "content": "NMK_JSK_002_X01 (23)",
      "group": "1",
      "id": "89",
      "start": "2014-12-10"
    },
    {
      "content": "NMK_JSK_002_PCR01_Rbcla-f_RbclR590 (23)",
      "group": "2",
      "id": "90",
      "start": "2014-12-18"
    },
    {
      "content": "NMK_JSK_004_X01 (23)",
      "group": "1",
      "id": "91",
      "start": "2014-12-17"
    },
    {
      "content": "NMK_JSK_001_X01 (23)",
      "group": "1",
      "id": "92",
      "start": "2014-12-10"
    },
    {
      "content": "NMK_JSK_001_PCR01_Rbcla-f_RbclR590 (23)",
      "group": "2",
      "id": "93",
      "start": "2014-12-16"
    },
    {
      "content": "NMK_JSK_001_PCR03_ITS2F_ITS3R (23)",
      "group": "2",
      "id": "94",
      "start": "2015-01-06"
    },
    {
      "content": "NMK_JSK_004_PCR01_Rbcla-f_RbclR590 (23)",
      "group": "2",
      "id": "95",
      "start": "2015-01-09"
    },
    {
      "content": "NMK_JSK_004_PCR01_ITS2F_ITS3R (23)",
      "group": "2",
      "id": "96",
      "start": "2015-01-09"
    },
    {
      "content": "NMK_JSK_005_X01 (23)",
      "group": "1",
      "id": "97",
      "start": "2014-12-10"
    },
    {
      "content": "NMK_JSK_005_PCR01_Rbcla-f_RbclR590 (23)",
      "group": "2",
      "id": "98",
      "start": "2014-12-16"
    },
    {
      "content": "NMK_JSK_007_X01 (18)",
      "group": "1",
      "id": "99",
      "start": "2014-12-17"
    },
    {
      "content": "NMK_JSK_002_PCR01_ITS2F_ITS3R (23)",
      "group": "2",
      "id": "100",
      "start": "2014-12-16"
    },
    {
      "content": "NMK_JSK_007_PCR01_rbcLaF_rbcLr590 (18)",
      "group": "2",
      "id": "101",
      "start": "2015-01-09"
    },
    {
      "content": "NMK_JSK_007_PCR01_ITS2F_ITS3R (18)",
      "group": "2",
      "id": "102",
      "start": "2014-12-17"
    },
    {
      "content": "NMK_JSK_002_PCR02_ITS2F_ITS3R (23)",
      "group": "2",
      "id": "103",
      "start": "2014-12-18"
    },
    {
      "content": "NMK_JSK_002_PCR03_ITS2F_ITS3R (23)",
      "group": "2",
      "id": "104",
      "start": "2015-01-08"
    },
    {
      "content": "NMK_JSK_002_Seq01_ITS2F (23)",
      "group": "3",
      "id": "105",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_002_Seq01_ITS3R (23)",
      "group": "3",
      "id": "106",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_002_Seq01_RbcLa-F (23)",
      "group": "3",
      "id": "107",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_002_Seq01_RbcLR590 (23)",
      "group": "3",
      "id": "108",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_GK_002_X01 (23)",
      "group": "1",
      "id": "109",
      "start": "2015-01-21"
    },
    {
      "content": "NMK_JSK_001_PCR01_ITS2F_ITS3R (23)",
      "group": "2",
      "id": "110",
      "start": "2014-12-16"
    },
    {
      "content": "NMK_JSK_001_PCR02_ITS2F_ITS3F (23)",
      "group": "2",
      "id": "111",
      "start": "2014-12-18"
    },
    {
      "content": "NMK_GK_002_PCR01_VF1t1_VR1t1 (23)",
      "group": "2",
      "id": "112",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_003_X01 (18)",
      "group": "1",
      "id": "113",
      "start": "2014-12-17"
    },
    {
      "content": "NMK_JSK_001_Seq01_ITS2F (23)",
      "group": "3",
      "id": "114",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_001_Seq01_ITS3R (23)",
      "group": "3",
      "id": "115",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_001_Seq01_RbclaF (23)",
      "group": "3",
      "id": "116",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_001_Seq01_RbclaR590 (23)",
      "group": "3",
      "id": "117",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_007_Seq01_ITS2F (18)",
      "group": "3",
      "id": "118",
      "start": "2015-01-16"
    },
    {
      "content": "NMK_JSK_007_Seq01_ITS3R (18)",
      "group": "3",
      "id": "119",
      "start": "2015-01-16"
    },
    {
      "content": "NMK_JSK_007_Seq01_rbcLaF (18)",
      "group": "3",
      "id": "120",
      "start": "2015-01-16"
    },
    {
      "content": "NMK_JSK_007_Seq01_rbcLr590 (18)",
      "group": "3",
      "id": "121",
      "start": "2015-01-16"
    },
    {
      "content": "NMK_JSK_003_PCR01_rbcla-f_rbclr590 (18)",
      "group": "2",
      "id": "122",
      "start": "2014-12-17"
    },
    {
      "content": "NMK_JSK_003_PCR02_rbcla-f_rbclr590 (18)",
      "group": "2",
      "id": "123",
      "start": "2015-01-06"
    },
    {
      "content": "NMK_JSK_003_PCR01_its2f_its3r (96)",
      "group": "2",
      "id": "124",
      "start": "2015-01-30"
    },
    {
      "content": "NMK_JSK_003_PCR02_its2f_its3r (18)",
      "group": "2",
      "id": "125",
      "start": "2015-01-09"
    },
    {
      "content": "NMK_JSK_004_Seq01_Rbcla-f_F (23)",
      "group": "3",
      "id": "126",
      "start": "2015-01-16"
    },
    {
      "content": "NMK_JSK_004_Seq02_rbcLr590_R (23)",
      "group": "3",
      "id": "127",
      "start": "2015-01-16"
    },
    {
      "content": "NMK_JSK_004_Seq01_ITS2F_F (23)",
      "group": "3",
      "id": "128",
      "start": "2015-01-16"
    },
    {
      "content": "NMK_JSK_004_Seq02_ITS3R_R (23)",
      "group": "3",
      "id": "129",
      "start": "2015-01-16"
    },
    {
      "content": "NMK_JSK_006_X01 (23)",
      "group": "1",
      "id": "130",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_006_PCR01_rbcla-f_rbclr590 (23)",
      "group": "2",
      "id": "131",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_006_PCR01_its2f_its3r (23)",
      "group": "2",
      "id": "132",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_006_Seq01_its2f (23)",
      "group": "3",
      "id": "133",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_006_Seq01_its3r (23)",
      "group": "3",
      "id": "134",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_006_PCR01_MatK-kim_3f_MatK-kim_1R (23)",
      "group": "2",
      "id": "135",
      "start": "2015-02-03"
    },
    {
      "content": "NMK_JSK_006_Seq01_rbclaf (23)",
      "group": "3",
      "id": "136",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_006_Seq01_rbclr590 (23)",
      "group": "3",
      "id": "137",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_006_Seq01_MatK-kim_3f (23)",
      "group": "3",
      "id": "138",
      "start": "2015-02-03"
    },
    {
      "content": "NMK_JSK_006_Seq01_MatK-kim_1r (23)",
      "group": "3",
      "id": "139",
      "start": "2015-02-03"
    },
    {
      "content": "NMK_JSK_002_PCR01_MatK-kim-3F_MatK-kim-1R (23)",
      "group": "2",
      "id": "140",
      "start": "2015-02-02"
    },
    {
      "content": "NMK_GK_001_X01 (23)",
      "group": "1",
      "id": "141",
      "start": "2014-12-20"
    },
    {
      "content": "NMK_JSK_007_PCR01_MatK-3F-KIM-r_MatK-1R-KIM (18)",
      "group": "2",
      "id": "142",
      "start": "2015-02-17"
    },
    {
      "content": "NMK_GK_002_PCR02_VF1_t1_VR1_t1 (23)",
      "group": "2",
      "id": "143",
      "start": "2015-02-18"
    },
    {
      "content": "NMK_GK_002_PCR01_LCO1490_HCO2198 (23)",
      "group": "2",
      "id": "144",
      "start": "2015-02-18"
    },
    {
      "content": "NMK_JSK_001_PCR01_MatK_3FKIM-r_matK_1F_kim (23)",
      "group": "2",
      "id": "145",
      "start": "2015-02-03"
    },
    {
      "content": "NMK_GK_001_PCR01_dgLCO1490_dgHCO2198 (23)",
      "group": "2",
      "id": "146",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_GK_001_PCR01_VF2_t1_FR1d_t1 (23)",
      "group": "2",
      "id": "147",
      "start": "2015-02-11"
    },
    {
      "content": "NMK_GK_001_PCR01_VF1_t1_VR1_t1 (23)",
      "group": "2",
      "id": "148",
      "start": "2015-01-22"
    },
    {
      "content": "NMK_JSK_007_PCR02_MatK-3F-KIM-r_MatK-1R-KIM (18)",
      "group": "2",
      "id": "149",
      "start": "2015-02-23"
    },
    {
      "content": "NMK_JSK_007_PCR02_ITS2F_ITS3R (18)",
      "group": "2",
      "id": "150",
      "start": "2015-02-18"
    },
    {
      "content": "NMK_JSK_007_PCR02_Rbcla-f_RbclR590 (18)",
      "group": "2",
      "id": "151",
      "start": "2015-02-18"
    },
    {
      "content": "NMK_GK_002_PCR03_VF1_t1_VR1_t1 (23)",
      "group": "2",
      "id": "152",
      "start": "2015-02-24"
    },
    {
      "content": "NMK_GK_002_PCR01_dgLCO1490_dgHCO2198 (23)",
      "group": "2",
      "id": "153",
      "start": "2015-02-24"
    },
    {
      "content": "NMK_JSK_003_PCR01_MatK-3F-KIM-r_MatK-1R-KIM (18)",
      "group": "2",
      "id": "154",
      "start": "2015-02-17"
    }
  ],
  "mx": [
    {
      "content": "CIBNOR_PCC_001 (74)",
      "group": "0",
      "id": "0",
      "start": "2014-11-21"
    },
    {
      "content": "ECOCH-AMA-001 (48)",
      "group": "0",
      "id": "1",
      "start": "2014-11-19"
    },
    {
      "content": "ECOCH_AMA_002 (67)",
      "group": "0",
      "id": "2",
      "start": "2014-12-01"
    },
    {
      "content": "IBUNAM_AJM_001 (96)",
      "group": "0",
      "id": "3",
      "start": "2014-10-14"
    },
    {
      "content": "IBUNAM_AJM_002 (96)",
      "group": "0",
      "id": "4",
      "start": "2014-10-27"
    },
    {
      "content": "IBUNAM_AJM_003 (96)",
      "group": "0",
      "id": "5",
      "start": "2014-10-27"
    },
    {
      "content": "IBUNAM_AJM_004 (50)",
      "group": "0",
      "id": "6",
      "start": "2014-12-03"
    },
    {
      "content": "IBUNAM_AJM_005 (24)",
      "group": "0",
      "id": "7",
      "start": "2014-12-03"
    },
    {
      "content": "IBUNAM_LCM_001 (95)",
      "group": "0",
      "id": "8",
      "start": "2014-08-26"
    },
    {
      "content": "IBUNAM_LCM_002 (95)",
      "group": "0",
      "id": "9",
      "start": "2014-09-03"
    },
    {
      "content": "IBUNAM_LCM_003 (95)",
      "group": "0",
      "id": "10",
      "start": "2014-09-08"
    },
    {
      "content": "IBUNAM_LCM_004 (95)",
      "group": "0",
      "id": "11",
      "start": "2014-09-26"
    },
    {
      "content": "IBUNAM_LCM_005 (95)",
      "group": "0",
      "id": "12",
      "start": "2015-01-22"
    },
    {
      "content": "IBUNAM_LCM_006 (95)",
      "group": "0",
      "id": "13",
      "start": "2015-01-22"
    },
    {
      "content": "ECOCH_AMA_001_PCR01_ceF_ceR (15)",
      "group": "2",
      "id": "14",
      "start": "2015-02-11"
    },
    {
      "content": "ECOCH_AMA_001_PCR01_LCO1490_HC02198 (48)",
      "group": "2",
      "id": "15",
      "start": "2014-09-22"
    },
    {
      "content": "ECOCH_AMA_001_Seq01_ceF_F (15)",
      "group": "3",
      "id": "16",
      "start": "2015-02-10"
    },
    {
      "content": "ECOCH_AMA_001_Seq01_ceR_R (15)",
      "group": "3",
      "id": "17",
      "start": "2015-02-10"
    },
    {
      "content": "ECOCH_AMA_001_Seq01_HCO2198_R (9)",
      "group": "3",
      "id": "18",
      "start": "2014-12-04"
    },
    {
      "content": "ECOCH_AMA_001_Seq01_LCO1490_F (9)",
      "group": "3",
      "id": "19",
      "start": "2014-12-04"
    },
    {
      "content": "ECOCH_AMA_001_Seq01_M13F(-21)_F (7)",
      "group": "3",
      "id": "20",
      "start": "2014-12-04"
    },
    {
      "content": "ECOCH_AMA_001_Seq01_M13R(-27)_R (7)",
      "group": "3",
      "id": "21",
      "start": "2014-12-04"
    },
    {
      "content": "ECOCH_AMA_001_X01 (48)",
      "group": "1",
      "id": "22",
      "start": "2014-12-02"
    },
    {
      "content": "ECOCH_AMA_001_X02 (15)",
      "group": "1",
      "id": "23",
      "start": "2015-01-30"
    },
    {
      "content": "ECOCH_AMA_002_PCR01_C_VF1LFt1_C_VR1LRt1 (67)",
      "group": "2",
      "id": "24",
      "start": "2014-12-02"
    },
    {
      "content": "ECOCH_AMA_002_Seq01_M13(-21)_F (60)",
      "group": "3",
      "id": "25",
      "start": "2014-12-04"
    },
    {
      "content": "ECOCH_AMA_002_Seq01_M13(-27)_R (60)",
      "group": "3",
      "id": "26",
      "start": "2014-12-04"
    },
    {
      "content": "ECOCH_AMA_002_X01 (67)",
      "group": "1",
      "id": "27",
      "start": "2014-12-01"
    },
    {
      "content": "IBUNAM_LCM_001_X01 (95)",
      "group": "1",
      "id": "28",
      "start": "2014-10-13"
    },
    {
      "content": "IBUNAM_LCM_002_X01 (95)",
      "group": "1",
      "id": "29",
      "start": "2014-11-14"
    },
    {
      "content": "IBUNAM_LCM_003_X01 (95)",
      "group": "1",
      "id": "30",
      "start": "2014-11-11"
    },
    {
      "content": "IBUNAM_LCM_004_X01 (95)",
      "group": "1",
      "id": "31",
      "start": "2014-11-11"
    },
    {
      "content": "IBUNAM_LCM_001_PCR01_3FKim_1RKIM (96)",
      "group": "2",
      "id": "32",
      "start": "2014-11-20"
    },
    {
      "content": "IBUNAM_AJM_001_001X (96)",
      "group": "1",
      "id": "33",
      "start": "2014-11-24"
    },
    {
      "content": "IBUNAM_LCM_001_PCR01_rbcLA1F_rbcLAR (96)",
      "group": "2",
      "id": "34",
      "start": "2014-11-21"
    },
    {
      "content": "IBUNAM_AJM_001_PCR01_LCO1490_HCO2198 (96)",
      "group": "2",
      "id": "35",
      "start": "2014-11-19"
    },
    {
      "content": "IBUNAM_AJM_002_001X (96)",
      "group": "1",
      "id": "36",
      "start": "2014-11-28"
    },
    {
      "content": "IBUNAM_AJM_002_PCR01_dgLCO1490_dgHCO2198 (96)",
      "group": "2",
      "id": "37",
      "start": "2014-10-24"
    },
    {
      "content": "IBUNAM_AJM_002_PCR02_VF1d_t1/VR1d_t1 (96)",
      "group": "2",
      "id": "38",
      "start": "2014-11-12"
    },
    {
      "content": "IBUNAM_AJM_003_001X (96)",
      "group": "1",
      "id": "39",
      "start": "2014-12-02"
    },
    {
      "content": "IBUNAM_AJM_003_PCR01_FishF2_t1_FishR2_t1 (96)",
      "group": "2",
      "id": "40",
      "start": "2014-11-03"
    },
    {
      "content": "IBUNAM_AJM_003_PCR02_FishF2_FishR2 (96)",
      "group": "2",
      "id": "41",
      "start": "2014-10-24"
    },
    {
      "content": "IBUNAM_AJM_003_PCR03_VF1d_1t_VR1d_1t (96)",
      "group": "2",
      "id": "42",
      "start": "2014-11-14"
    },
    {
      "content": "IBUNAM_LCM_001_PCR02_rbcLA1F_rbcLAR (96)",
      "group": "2",
      "id": "43",
      "start": "2014-12-02"
    },
    {
      "content": "IBUNAM_AJM_004_001X (50)",
      "group": "1",
      "id": "44",
      "start": "2014-12-03"
    },
    {
      "content": "IBUNAM_AJM_005_001X (24)",
      "group": "1",
      "id": "45",
      "start": "2014-12-03"
    },
    {
      "content": "IBUNAM_AJM_004_PCR01_VF1d_1t_VR1d_1t (50)",
      "group": "2",
      "id": "46",
      "start": "2014-11-13"
    },
    {
      "content": "IBUNAM_AJM_005_PCR01_LCO1490_HCO2198 (24)",
      "group": "2",
      "id": "47",
      "start": "2014-11-03"
    },
    {
      "content": "IBUNAM_AJM_001_Seq01_LCO1490_F (96)",
      "group": "3",
      "id": "48",
      "start": "2014-11-28"
    },
    {
      "content": "IBUNAM_LCM_002_PCR03_rbcLA1F_rbcLAR (96)",
      "group": "2",
      "id": "49",
      "start": "2014-12-03"
    },
    {
      "content": "IBUNAM_LCM_002_PCR02_3FKim_1RKIM (96)",
      "group": "2",
      "id": "50",
      "start": "2014-12-05"
    },
    {
      "content": "IBUNAM_LCM_002_PCR05_rbcLA1F_rbcL590R (52)",
      "group": "2",
      "id": "51",
      "start": "2014-12-09"
    },
    {
      "content": "IBUNAM_LCM_001_PCR03_390F_3FKim-r (79)",
      "group": "2",
      "id": "52",
      "start": "2014-12-01"
    },
    {
      "content": "IBUNAM_LCM_001_PCR04_rbcLA1F_rbcL590R (54)",
      "group": "2",
      "id": "53",
      "start": "2014-12-02"
    },
    {
      "content": "IBUNAM_LCM_001_Seq01_rbcLA1F (41)",
      "group": "3",
      "id": "54",
      "start": "2014-12-09"
    },
    {
      "content": "IBUNAM_AJM_002_Seq01_VF1d_t1_F (96)",
      "group": "3",
      "id": "55",
      "start": "2014-12-09"
    },
    {
      "content": "IBUNAM_AJM_002_Seq01_VR1d_t1_R (96)",
      "group": "3",
      "id": "56",
      "start": "2014-12-09"
    },
    {
      "content": "IBUNAM_LCM_001_Seq03_3FKim (17)",
      "group": "3",
      "id": "57",
      "start": "2014-12-09"
    },
    {
      "content": "IBUNAM_LCM_001_Seq04_1RKIM (17)",
      "group": "3",
      "id": "58",
      "start": "2014-12-09"
    },
    {
      "content": "IBUNAM_LCM_002_Seq05_3FKim-r (28)",
      "group": "3",
      "id": "59",
      "start": "2014-12-11"
    },
    {
      "content": "IBUNAM_LCM_002_Seq06_1RKIM (28)",
      "group": "3",
      "id": "60",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_LCM_002_Seq07_rbcL1F (44)",
      "group": "3",
      "id": "61",
      "start": "2014-12-11"
    },
    {
      "content": "IBUNAM_LCM_002_Seq08_rbcLAR (44)",
      "group": "3",
      "id": "62",
      "start": "2014-12-11"
    },
    {
      "content": "IBUNAM_AJM_001_Seq01_HCO2198_R (96)",
      "group": "3",
      "id": "63",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_AJM_003_Seq01_FishF2_t1_F (19)",
      "group": "3",
      "id": "64",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_AJM_003_Seq01_FishR2_t1_R (19)",
      "group": "3",
      "id": "65",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_AJM_003_Seq02_FishF2_F (18)",
      "group": "3",
      "id": "66",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_AJM_003_Seq02_FishR2_R (18)",
      "group": "3",
      "id": "67",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_AJM_003_Seq03_VF1d_t1_F (59)",
      "group": "3",
      "id": "68",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_AJM_003_Seq03_VR1d_t1_R (59)",
      "group": "3",
      "id": "69",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_AJM_004_Seq01_VF1d_t1_F (47)",
      "group": "3",
      "id": "70",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_AJM_004_Seq01_VR1d_t1_R (47)",
      "group": "3",
      "id": "71",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_AJM_005_Seq01_LCO1490_F (24)",
      "group": "3",
      "id": "72",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_AJM_005_Seq01_HCO2198_R (24)",
      "group": "3",
      "id": "73",
      "start": "2014-12-10"
    },
    {
      "content": "IBUNAM_LCM_002_PCR04_390F_3FKim-r (68)",
      "group": "2",
      "id": "74",
      "start": "2014-12-04"
    },
    {
      "content": "IBUNAM_LCM_001_Seq02_rbcLAR (41)",
      "group": "3",
      "id": "75",
      "start": "2014-12-09"
    },
    {
      "content": "IBUNAM_LCM_003_PCR06_rbcLA1F_rbcLAR (96)",
      "group": "2",
      "id": "76",
      "start": "2015-01-12"
    },
    {
      "content": "IBUNAM_LCM_003_PCR05_3FKim_1RKIM (96)",
      "group": "2",
      "id": "77",
      "start": "2015-01-14"
    },
    {
      "content": "IBUNAM_LCM_004_PCR07_rbcLA1F_rbcLAR (96)",
      "group": "2",
      "id": "78",
      "start": "2015-01-12"
    },
    {
      "content": "IBUNAM_LCM_004_PCR06_3FKim_1RKIM (96)",
      "group": "2",
      "id": "79",
      "start": "2015-01-09"
    },
    {
      "content": "IBUNAM_LCM_001_PCR01_ITS5F_ITS4R (96)",
      "group": "2",
      "id": "80",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_003_PCR03_ITS5F_ITS4R (96)",
      "group": "2",
      "id": "81",
      "start": "2015-01-12"
    },
    {
      "content": "IBUNAM_LCM_004_PCR04_ITS5F_ITS4R (96)",
      "group": "2",
      "id": "82",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_006_X01 (95)",
      "group": "1",
      "id": "83",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_005_X01 (95)",
      "group": "1",
      "id": "84",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_002_PCR02_ITS5F_ITS4R (96)",
      "group": "2",
      "id": "85",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_001_Seq09_ITS5F (30)",
      "group": "3",
      "id": "86",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_001_Seq10_ITS4R (30)",
      "group": "3",
      "id": "87",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_002_Seq11_ITS5F (32)",
      "group": "3",
      "id": "88",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_002_Seq12_ITS4R (32)",
      "group": "3",
      "id": "89",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_005_PCR08_rbcL1F_rbcLAR (96)",
      "group": "2",
      "id": "90",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_003_Seq15_rbcLA1F (72)",
      "group": "3",
      "id": "91",
      "start": "2015-01-29"
    },
    {
      "content": "IBUNAM_LCM_003_Seq16_rbcLAR (72)",
      "group": "3",
      "id": "92",
      "start": "2015-01-29"
    },
    {
      "content": "IBUNAM_LCM_003_Seq17_ITS5F (62)",
      "group": "3",
      "id": "93",
      "start": "2015-01-29"
    },
    {
      "content": "IBUNAM_LCM_003_Seq18_ITS4R (62)",
      "group": "3",
      "id": "94",
      "start": "2015-01-29"
    },
    {
      "content": "IBUNAM_LCM_004_Seq22_3FKim (65)",
      "group": "3",
      "id": "95",
      "start": "2015-01-29"
    },
    {
      "content": "IBUNAM_LCM_004_Seq21_1RKIM (65)",
      "group": "3",
      "id": "96",
      "start": "2015-01-29"
    },
    {
      "content": "IBUNAM_LCM_004_Seq24_ITS5F (72)",
      "group": "3",
      "id": "97",
      "start": "2015-01-29"
    },
    {
      "content": "IBUNAM_LCM_004_Seq23_ITS4R (72)",
      "group": "3",
      "id": "98",
      "start": "2015-01-29"
    },
    {
      "content": "IBUNAM_LCM_005_PCR07_3FKim_1RKim (96)",
      "group": "2",
      "id": "99",
      "start": "2015-01-30"
    },
    {
      "content": "IBUNAM_LCM_006_PCR08_3FKim_1RKim (96)",
      "group": "2",
      "id": "100",
      "start": "2015-01-30"
    },
    {
      "content": "IBUNAM_LCM_005_Seq25_rbcL1F (91)",
      "group": "3",
      "id": "101",
      "start": "2015-01-30"
    },
    {
      "content": "IBUNAM_LCM_005_Seq26_rbcLAR (91)",
      "group": "3",
      "id": "102",
      "start": "2015-01-30"
    },
    {
      "content": "IBUNAM_LCM_006_Seq29_3FKim (71)",
      "group": "3",
      "id": "103",
      "start": "2015-01-30"
    },
    {
      "content": "IBUNAM_LCM_006_Seq30_1RKim (71)",
      "group": "3",
      "id": "104",
      "start": "2015-01-30"
    },
    {
      "content": "IBUNAM_LCM_006_PCR09_rbcLA1F_rbcLAR (96)",
      "group": "2",
      "id": "105",
      "start": "2015-02-03"
    },
    {
      "content": "IBUNAM_LCM_004_Seq20_rbcLAR (76)",
      "group": "3",
      "id": "106",
      "start": "2015-01-29"
    },
    {
      "content": "IBUNAM_LCM_004_Seq19_rbcLA1F (76)",
      "group": "3",
      "id": "107",
      "start": "2015-01-29"
    },
    {
      "content": "IBUNAM_LCM_003_Seq13_3FKim (59)",
      "group": "3",
      "id": "108",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_003_Seq14_1RKIM (59)",
      "group": "3",
      "id": "109",
      "start": "2015-01-28"
    },
    {
      "content": "IBUNAM_LCM_005_PCR05_ITS5F_ITS4R (96)",
      "group": "2",
      "id": "110",
      "start": "2015-02-05"
    },
    {
      "content": "IBUNAM_LCM_006_Seq31_rbcL1F (69)",
      "group": "3",
      "id": "111",
      "start": "2015-02-10"
    },
    {
      "content": "IBUNAM_LCM_006_Seq32_rbcLAR (69)",
      "group": "3",
      "id": "112",
      "start": "2015-02-10"
    },
    {
      "content": "IBUNAM_LCM_005_Seq28_1RKim (86)",
      "group": "3",
      "id": "113",
      "start": "2015-02-11"
    },
    {
      "content": "IBUNAM_LCM_006_PCR06_ITS5F_ITS4R (96)",
      "group": "2",
      "id": "114",
      "start": "2015-02-12"
    },
    {
      "content": "IBUNAM_LCM_005_Seq27_3FKim (86)",
      "group": "3",
      "id": "115",
      "start": "2015-02-17"
    },
    {
      "content": "IBUNAM_LCM_006_Seq33_ITS5F (55)",
      "group": "3",
      "id": "116",
      "start": "2015-02-18"
    },
    {
      "content": "IBUNAM_LCM_006_Seq34_ITS4R (55)",
      "group": "3",
      "id": "117",
      "start": "2015-02-18"
    },
    {
      "content": "CIBNOR_PCC_001_PCR01_CVF1LFt1_CVR1LRt1 (74)",
      "group": "2",
      "id": "118",
      "start": "2014-12-01"
    },
    {
      "content": "CIBNOR_PCC_001_Seq01_CVF1LFt1_2 (74)",
      "group": "3",
      "id": "119",
      "start": "2014-12-05"
    },
    {
      "content": "CIBNOR_PCC_001_Seq01_CVR1LRt1_2 (74)",
      "group": "3",
      "id": "120",
      "start": "2014-12-05"
    },
    {
      "content": "CIBNOR_PCC_001_X01 (74)",
      "group": "1",
      "id": "121",
      "start": "2014-11-25"
    }
  ],
  "za": [
    {
      "content": "ACDB_ZES_001 (49)",
      "group": "0",
      "id": "0",
      "start": "2014-10-13"
    },
    {
      "content": "ACDB_ZES_002 (19)",
      "group": "0",
      "id": "1",
      "start": "2014-12-04"
    },
    {
      "content": "ACDB_ZES_003 (13)",
      "group": "0",
      "id": "2",
      "start": "2015-02-11"
    },
    {
      "content": "NZG_MR_001 (16)",
      "group": "0",
      "id": "3",
      "start": "2014-11-27"
    },
    {
      "content": "NZG_MR_002 (16)",
      "group": "0",
      "id": "4",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_003 (16)",
      "group": "0",
      "id": "5",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_004 (16)",
      "group": "0",
      "id": "6",
      "start": "2014-12-03"
    },
    {
      "content": "NZG_MR_005 (16)",
      "group": "0",
      "id": "7",
      "start": "2014-12-03"
    },
    {
      "content": "NZG_MR_006 (16)",
      "group": "0",
      "id": "8",
      "start": "2014-12-03"
    },
    {
      "content": "NZG_MR_007 (16)",
      "group": "0",
      "id": "9",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_MR_008 (16)",
      "group": "0",
      "id": "10",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_MR_009 (16)",
      "group": "0",
      "id": "11",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_MR_010 (16)",
      "group": "0",
      "id": "12",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_MR_011 (16)",
      "group": "0",
      "id": "13",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_MR_012 (13)",
      "group": "0",
      "id": "14",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_MR_013 (16)",
      "group": "0",
      "id": "15",
      "start": "2014-12-23"
    },
    {
      "content": "NZG_MR_014 (16)",
      "group": "0",
      "id": "16",
      "start": "2014-12-23"
    },
    {
      "content": "NZG_MR_015 (16)",
      "group": "0",
      "id": "17",
      "start": "2014-12-23"
    },
    {
      "content": "NZG_TR_001 (16)",
      "group": "0",
      "id": "18",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_TR_002 (16)",
      "group": "0",
      "id": "19",
      "start": "2014-12-03"
    },
    {
      "content": "NZG_TR_003 (16)",
      "group": "0",
      "id": "20",
      "start": "2014-12-03"
    },
    {
      "content": "NZG_TR_004 (16)",
      "group": "0",
      "id": "21",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_TR_005 (16)",
      "group": "0",
      "id": "22",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_TR_006 (16)",
      "group": "0",
      "id": "23",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_TR_007 (16)",
      "group": "0",
      "id": "24",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_TR_008 (16)",
      "group": "0",
      "id": "25",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_TR_009 (16)",
      "group": "0",
      "id": "26",
      "start": "2014-12-23"
    },
    {
      "content": "NZG_TR_010 (16)",
      "group": "0",
      "id": "27",
      "start": "2014-12-23"
    },
    {
      "content": "NZG_TR_011 (14)",
      "group": "0",
      "id": "28",
      "start": "2014-12-23"
    },
    {
      "content": "SAIAB_MMW_001 (48)",
      "group": "0",
      "id": "29",
      "start": "2014-11-12"
    },
    {
      "content": "SAIAB_TLB_001 (16)",
      "group": "0",
      "id": "30",
      "start": "2015-02-23"
    },
    {
      "content": "SAIAB_TLB_002 (23)",
      "group": "0",
      "id": "31",
      "start": "2015-02-23"
    },
    {
      "content": "SAIAB_TLB_003 (24)",
      "group": "0",
      "id": "32",
      "start": "2015-02-23"
    },
    {
      "content": "NZG_MR_001_X01 (16)",
      "group": "1",
      "id": "33",
      "start": "2014-11-26"
    },
    {
      "content": "NZG_MR_001_PCR01_HCO2198_LCO1490 (16)",
      "group": "2",
      "id": "34",
      "start": "2014-11-27"
    },
    {
      "content": "NZG_MR_001_PCR01_CytB1_CytB2 (16)",
      "group": "2",
      "id": "35",
      "start": "2014-11-27"
    },
    {
      "content": "NZG_MR_001_Seq01_LCO1490 (7)",
      "group": "3",
      "id": "36",
      "start": "2014-11-28"
    },
    {
      "content": "NZG_MR_001_Seq01_HCO2198 (7)",
      "group": "3",
      "id": "37",
      "start": "2014-11-28"
    },
    {
      "content": "NZG_MR_001_Seq01_CytB1 (15)",
      "group": "3",
      "id": "38",
      "start": "2014-11-28"
    },
    {
      "content": "NZG_MR_001_Seq01_CytB2 (15)",
      "group": "3",
      "id": "39",
      "start": "2014-11-28"
    },
    {
      "content": "NZG_MR_002_X01 (16)",
      "group": "1",
      "id": "40",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_003_X01 (16)",
      "group": "1",
      "id": "41",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_TR_001_X01 (16)",
      "group": "1",
      "id": "42",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_002_PCR01_CytB1_CytB2 (16)",
      "group": "2",
      "id": "43",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_002_PCR01_HCO2198_LCO1490 (16)",
      "group": "2",
      "id": "44",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_003_CytB (16)",
      "group": "2",
      "id": "45",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_003_COI (16)",
      "group": "2",
      "id": "46",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_002_Seq01_CytB1 (14)",
      "group": "3",
      "id": "47",
      "start": "2014-12-03"
    },
    {
      "content": "NZG_MR_002_Seq01_CytB2 (16)",
      "group": "3",
      "id": "48",
      "start": "2014-12-03"
    },
    {
      "content": "NZG_MR_002_Seq01_HCO2198 (5)",
      "group": "3",
      "id": "49",
      "start": "2014-12-03"
    },
    {
      "content": "NZG_MR_002_Seq01_LCO1490 (5)",
      "group": "3",
      "id": "50",
      "start": "2014-12-03"
    },
    {
      "content": "NZG_MR_003_CytB1 (12)",
      "group": "3",
      "id": "51",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_003_CytB2 (12)",
      "group": "3",
      "id": "52",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_004_X01 (16)",
      "group": "1",
      "id": "53",
      "start": "2014-12-02"
    },
    {
      "content": "NZG_MR_004_CytB (16)",
      "group": "2",
      "id": "54",
      "start": "2014-12-04"
    },
    {
      "content": "NZG_MR_004_COI (16)",
      "group": "2",
      "id": "55",
      "start": "2014-12-04"
    },
    {
      "content": "NZG_MR_004_HCO2198 (3)",
      "group": "3",
      "id": "56",
      "start": "2014-12-05"
    },
    {
      "content": "NZG_MR_004_LCO1490 (3)",
      "group": "3",
      "id": "57",
      "start": "2014-12-05"
    },
    {
      "content": "NZG_MR_004_CytB1 (14)",
      "group": "3",
      "id": "58",
      "start": "2014-12-05"
    },
    {
      "content": "NZG_MR_004_CytB2 (14)",
      "group": "3",
      "id": "59",
      "start": "2014-12-05"
    },
    {
      "content": "NZG_MR_006_X01 (16)",
      "group": "1",
      "id": "60",
      "start": "2014-12-05"
    },
    {
      "content": "NZG_TR_001_PCR01_LC01490_HC02198 (16)",
      "group": "2",
      "id": "61",
      "start": "2014-12-03"
    },
    {
      "content": "NZG_TR_001_Seq01_CytB_UniF (16)",
      "group": "3",
      "id": "62",
      "start": "2014-12-09"
    },
    {
      "content": "NZG_TR_001_CytB2 (16)",
      "group": "3",
      "id": "63",
      "start": "2014-12-09"
    },
    {
      "content": "NZG_TR_001_CytB2.1 (16)",
      "group": "3",
      "id": "64",
      "start": "2014-12-09"
    },
    {
      "content": "NZG_TR_001_Seq01_CytB_UniR (16)",
      "group": "3",
      "id": "65",
      "start": "2014-12-09"
    },
    {
      "content": "NZG_MR_005_X01 (16)",
      "group": "1",
      "id": "66",
      "start": "2014-12-05"
    },
    {
      "content": "NZG_MR_006_CytB (16)",
      "group": "2",
      "id": "67",
      "start": "2014-12-08"
    },
    {
      "content": "NZG_MR_006_COI (16)",
      "group": "2",
      "id": "68",
      "start": "2014-12-08"
    },
    {
      "content": "NZG_MR_006_CytB1 (16)",
      "group": "3",
      "id": "69",
      "start": "2014-12-10"
    },
    {
      "content": "NZG_MR_006_CytB2 (16)",
      "group": "3",
      "id": "70",
      "start": "2014-12-10"
    },
    {
      "content": "NZG_TR_002_X01 (16)",
      "group": "1",
      "id": "71",
      "start": "2014-12-08"
    },
    {
      "content": "NZG_TR_003_X01 (16)",
      "group": "1",
      "id": "72",
      "start": "2014-12-11"
    },
    {
      "content": "NZG_TR_002_PCR01_CytB_Uni (16)",
      "group": "2",
      "id": "73",
      "start": "2014-12-09"
    },
    {
      "content": "NZG_TR_003_PCR01_CytB_Uni (16)",
      "group": "2",
      "id": "74",
      "start": "2014-12-11"
    },
    {
      "content": "NZG_MR_006_HCO2198 (6)",
      "group": "3",
      "id": "75",
      "start": "2014-12-10"
    },
    {
      "content": "NZG_MR_006_LCO1490 (6)",
      "group": "3",
      "id": "76",
      "start": "2014-12-10"
    },
    {
      "content": "NZG_MR_007_X01 (16)",
      "group": "1",
      "id": "77",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_MR_008_X01 (16)",
      "group": "1",
      "id": "78",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_MR_009_X01 (16)",
      "group": "1",
      "id": "79",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_MR_010_X01 (16)",
      "group": "1",
      "id": "80",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_MR_011_X01 (16)",
      "group": "1",
      "id": "81",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_MR_012_X01 (13)",
      "group": "1",
      "id": "82",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_MR_007_PCR01_BirdR1_BirdR1 (16)",
      "group": "2",
      "id": "83",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_MR_007_PCR01_CytB1_CytB2 (16)",
      "group": "2",
      "id": "84",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_MR_007_Seq01_BirdF1 (7)",
      "group": "3",
      "id": "85",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_007_Seq01_BirdR1 (7)",
      "group": "3",
      "id": "86",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_008_COI (16)",
      "group": "2",
      "id": "87",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_008_BirdR1 (16)",
      "group": "3",
      "id": "88",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_MR_008_BirdF1 (16)",
      "group": "3",
      "id": "89",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_MR_008_CytB (16)",
      "group": "2",
      "id": "90",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_009_CytB (16)",
      "group": "2",
      "id": "91",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_009_COI (16)",
      "group": "2",
      "id": "92",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_010_COI (16)",
      "group": "2",
      "id": "93",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_010_CytB (16)",
      "group": "2",
      "id": "94",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_011_CytB (16)",
      "group": "2",
      "id": "95",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_011_COI (16)",
      "group": "2",
      "id": "96",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_012_CytB (16)",
      "group": "2",
      "id": "97",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_012_COI (13)",
      "group": "2",
      "id": "98",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_009_BirdF1 (15)",
      "group": "3",
      "id": "99",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_009_BirdR1 (15)",
      "group": "3",
      "id": "100",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_010_BirdF1 (16)",
      "group": "3",
      "id": "101",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_010_BirdR1 (16)",
      "group": "3",
      "id": "102",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_011_BirdR1 (15)",
      "group": "3",
      "id": "103",
      "start": "2014-12-19"
    },
    {
      "content": "NZG_MR_011_BirdF1 (15)",
      "group": "3",
      "id": "104",
      "start": "2014-12-19"
    },
    {
      "content": "NZG_MR_012_BirdF1 (11)",
      "group": "3",
      "id": "105",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_012_BirdR1 (11)",
      "group": "3",
      "id": "106",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_005_CytB (16)",
      "group": "2",
      "id": "107",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_005_COI (16)",
      "group": "2",
      "id": "108",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_MR_005_HCO2198 (11)",
      "group": "3",
      "id": "109",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_005_LCO1490 (11)",
      "group": "3",
      "id": "110",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_005_CytB1 (16)",
      "group": "3",
      "id": "111",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_005_CytB2 (16)",
      "group": "3",
      "id": "112",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_TR_002_CytB1 (16)",
      "group": "3",
      "id": "113",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_002_CytB2 (16)",
      "group": "3",
      "id": "114",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_002_CytB1A (16)",
      "group": "3",
      "id": "115",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_002_CytB2B (16)",
      "group": "3",
      "id": "116",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_002_CytB1A.1 (16)",
      "group": "3",
      "id": "117",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_001_Seq01_LC01490_F (16)",
      "group": "3",
      "id": "118",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_001_COIR (16)",
      "group": "3",
      "id": "119",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_001_Seq01_HC02198_R (16)",
      "group": "3",
      "id": "120",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_002_Seq01_CytB_UniF (16)",
      "group": "3",
      "id": "121",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_002_Seq01_CytB_UniR (16)",
      "group": "3",
      "id": "122",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_002_Seq01_HC0212198_R (16)",
      "group": "3",
      "id": "123",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_002_Seq01_LC01490 (16)",
      "group": "3",
      "id": "124",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_003_Seq01_CytB_UniF (16)",
      "group": "3",
      "id": "125",
      "start": "2014-12-10"
    },
    {
      "content": "NZG_TR_003_Seq01_CytB_UniR (16)",
      "group": "3",
      "id": "126",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_003_Seq01_HC02198 (16)",
      "group": "3",
      "id": "127",
      "start": "2014-12-10"
    },
    {
      "content": "NZG_TR_003_Seq01_LC1490 (16)",
      "group": "3",
      "id": "128",
      "start": "2014-12-10"
    },
    {
      "content": "NZG_TR_004_X01 (16)",
      "group": "1",
      "id": "129",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_004_PCR01_CytB_Uni (16)",
      "group": "2",
      "id": "130",
      "start": "2014-12-10"
    },
    {
      "content": "NZG_TR_004_PCR01_BirdF (16)",
      "group": "2",
      "id": "131",
      "start": "2014-12-12"
    },
    {
      "content": "NZG_TR_004_Seq01_BirdF1 (16)",
      "group": "3",
      "id": "132",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_TR_004_Seq01_BirdR1 (16)",
      "group": "3",
      "id": "133",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_TR_004_Seq01_CytB1_UniF (16)",
      "group": "3",
      "id": "134",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_TR_004_Seq01_CytB2_UniR (16)",
      "group": "3",
      "id": "135",
      "start": "2014-12-13"
    },
    {
      "content": "NZG_TR_005_X01 (16)",
      "group": "1",
      "id": "136",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_005__PCR01_CytB (16)",
      "group": "2",
      "id": "137",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_TR_005_PCR01_BirdFR (16)",
      "group": "2",
      "id": "138",
      "start": "2014-12-15"
    },
    {
      "content": "NZG_TR_005_Seq01_BirdF (16)",
      "group": "3",
      "id": "139",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_TR_005_Seq01_BirdR (16)",
      "group": "3",
      "id": "140",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_TR_005_PCR01_CytB1 (16)",
      "group": "3",
      "id": "141",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_TR_005_Seq01_CytB2 (16)",
      "group": "3",
      "id": "142",
      "start": "2014-12-17"
    },
    {
      "content": "NZG_TR_006_X01 (16)",
      "group": "1",
      "id": "143",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_006_PCR01_BIRDFR (16)",
      "group": "2",
      "id": "144",
      "start": "2014-12-19"
    },
    {
      "content": "NZG_TR_006_PCR01_CYTB (16)",
      "group": "2",
      "id": "145",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_006_Seq01_BIRDF (16)",
      "group": "3",
      "id": "146",
      "start": "2014-12-19"
    },
    {
      "content": "NZG_TR_006_Seq01_BIRDR (16)",
      "group": "3",
      "id": "147",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_TR_007_X01 (16)",
      "group": "1",
      "id": "148",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_008_X01 (16)",
      "group": "1",
      "id": "149",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_TR_007_PCR01_CytB (16)",
      "group": "2",
      "id": "150",
      "start": "2014-12-22"
    },
    {
      "content": "NZG_TR_007_PCR01_BirdFR (16)",
      "group": "2",
      "id": "151",
      "start": "2014-12-22"
    },
    {
      "content": "NZG_TR_008_PCR01_CytB (16)",
      "group": "2",
      "id": "152",
      "start": "2014-12-22"
    },
    {
      "content": "NZG_TR_008_PCR01_BirdFR (16)",
      "group": "2",
      "id": "153",
      "start": "2014-12-22"
    },
    {
      "content": "NZG_TR_006_Seq01_CYTB1 (16)",
      "group": "3",
      "id": "154",
      "start": "2014-12-23"
    },
    {
      "content": "NZG_TR_006_Seq01_CYTB2 (16)",
      "group": "3",
      "id": "155",
      "start": "2014-12-23"
    },
    {
      "content": "NZG_TR_007_Seq01_BirdF (16)",
      "group": "3",
      "id": "156",
      "start": "2014-12-24"
    },
    {
      "content": "NZG_TR_007_Seq01_BirdR (16)",
      "group": "3",
      "id": "157",
      "start": "2014-12-24"
    },
    {
      "content": "NZG_TR_007_Seq01_CytB1 (16)",
      "group": "3",
      "id": "158",
      "start": "2014-12-24"
    },
    {
      "content": "NZG_TR_007_Seq01_CytB2 (16)",
      "group": "3",
      "id": "159",
      "start": "2014-12-24"
    },
    {
      "content": "NZG_TR_008_Seq01_CytB1 (16)",
      "group": "3",
      "id": "160",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_008_Seq01_CytB2 (16)",
      "group": "3",
      "id": "161",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_008_Seq01_BirdF (16)",
      "group": "3",
      "id": "162",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_TR_008_Seq01_BirdR (16)",
      "group": "3",
      "id": "163",
      "start": "2014-12-27"
    },
    {
      "content": "NZG_MR_013_X01 (16)",
      "group": "1",
      "id": "164",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_MR_014_X01 (16)",
      "group": "1",
      "id": "165",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_MR_015_X01 (16)",
      "group": "1",
      "id": "166",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_MR_013_PCR01_CytB1_CytB2 (16)",
      "group": "2",
      "id": "167",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_MR_013_COI (16)",
      "group": "2",
      "id": "168",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_TR_009_X01 (16)",
      "group": "1",
      "id": "169",
      "start": "2015-01-03"
    },
    {
      "content": "NZG_TR_010_X01 (16)",
      "group": "1",
      "id": "170",
      "start": "2015-01-03"
    },
    {
      "content": "NZG_TR_011_X01 (14)",
      "group": "1",
      "id": "171",
      "start": "2015-01-03"
    },
    {
      "content": "NZG_TR_009_PCR01_Cytb (16)",
      "group": "2",
      "id": "172",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_TR_009_PCR01_RepCOI (16)",
      "group": "2",
      "id": "173",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_TR_010_PCR01_CytB (16)",
      "group": "2",
      "id": "174",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_TR_010_PCR01_RepCOI (16)",
      "group": "2",
      "id": "175",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_TR_011_PCR01_CytB (14)",
      "group": "2",
      "id": "176",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_TR_011_PCR01_RepCOI (14)",
      "group": "2",
      "id": "177",
      "start": "2014-12-20"
    },
    {
      "content": "NZG_TR_009_Seq01_Cytb1 (16)",
      "group": "3",
      "id": "178",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_TR_009_Seq01_Cytb2 (16)",
      "group": "3",
      "id": "179",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_TR_009_Seq01_RepCOIF (16)",
      "group": "3",
      "id": "180",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_TR_009_Seq01_RepCOIR (16)",
      "group": "3",
      "id": "181",
      "start": "2014-12-28"
    },
    {
      "content": "NZG_TR_010_Seq01_CytB1 (16)",
      "group": "3",
      "id": "182",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_TR_010_Seq01_CytB2 (16)",
      "group": "3",
      "id": "183",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_TR_010_Seq01_RepCOIF (16)",
      "group": "3",
      "id": "184",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_TR_010_Seq01_RepCOIR (16)",
      "group": "3",
      "id": "185",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_TR_011_Seq01_CytB1 (13)",
      "group": "3",
      "id": "186",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_TR_011_Seq01_CytB2 (13)",
      "group": "3",
      "id": "187",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_TR_011_Seq01_RepCOIF (14)",
      "group": "3",
      "id": "188",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_TR_011_Seq01_RepCOIR (14)",
      "group": "3",
      "id": "189",
      "start": "2014-12-31"
    },
    {
      "content": "NZG_MR_009_CytB1 (16)",
      "group": "3",
      "id": "190",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_009_CytB2 (16)",
      "group": "3",
      "id": "191",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_010_CytB1 (16)",
      "group": "3",
      "id": "192",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_010_CytB2 (16)",
      "group": "3",
      "id": "193",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_011_CytB1 (16)",
      "group": "3",
      "id": "194",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_011_CytB2 (16)",
      "group": "3",
      "id": "195",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_013_RepCOIF (14)",
      "group": "3",
      "id": "196",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_MR_013_RepCOIR (14)",
      "group": "3",
      "id": "197",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_MR_014_COI (16)",
      "group": "2",
      "id": "198",
      "start": "2014-12-21"
    },
    {
      "content": "NZG_MR_014_RepCOIF (6)",
      "group": "3",
      "id": "199",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_MR_014_RepCOIR (6)",
      "group": "3",
      "id": "200",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_MR_015_COI (16)",
      "group": "2",
      "id": "201",
      "start": "2014-12-21"
    },
    {
      "content": "NZG_MR_015_RepCOIF (11)",
      "group": "3",
      "id": "202",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_MR_015_RepCOIR (11)",
      "group": "3",
      "id": "203",
      "start": "2014-12-29"
    },
    {
      "content": "NZG_MR_007_Seq01_CytB1 (16)",
      "group": "3",
      "id": "204",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_007_Seq01_CytB2 (16)",
      "group": "3",
      "id": "205",
      "start": "2014-12-18"
    },
    {
      "content": "NZG_MR_008_Seq01_CytB1 (16)",
      "group": "3",
      "id": "206",
      "start": "2015-01-20"
    },
    {
      "content": "NZG_MR_008_Seq01_CytB2 (16)",
      "group": "3",
      "id": "207",
      "start": "2015-01-20"
    },
    {
      "content": "NZG_MR_014_PCR01_CytB1_CytB2 (16)",
      "group": "2",
      "id": "208",
      "start": "2015-01-20"
    },
    {
      "content": "NZG_MR_014_Seq01_CytB1 (16)",
      "group": "3",
      "id": "209",
      "start": "2015-01-21"
    },
    {
      "content": "NZG_MR_014_Seq01_CytB2 (16)",
      "group": "3",
      "id": "210",
      "start": "2015-01-21"
    },
    {
      "content": "NZG_MR_015_PCR01_CytB1_CytB2 (16)",
      "group": "2",
      "id": "211",
      "start": "2015-01-21"
    },
    {
      "content": "NZG_MR_015_Seq01_CytB1 (16)",
      "group": "3",
      "id": "212",
      "start": "2015-01-21"
    },
    {
      "content": "NZG_MR_015_Seq01_CytB2 (16)",
      "group": "3",
      "id": "213",
      "start": "2015-01-21"
    },
    {
      "content": "NZG_MR_013_Seq01_CytB1 (16)",
      "group": "3",
      "id": "214",
      "start": "2015-01-21"
    },
    {
      "content": "NZG_MR_013_Seq01_CytB2 (16)",
      "group": "3",
      "id": "215",
      "start": "2015-01-21"
    },
    {
      "content": "NZG_TR_007_PCR02_CytB (16)",
      "group": "2",
      "id": "216",
      "start": "2015-02-10"
    },
    {
      "content": "NZG_TR_007_Seq02_CytB1F (11)",
      "group": "3",
      "id": "217",
      "start": "2015-01-12"
    },
    {
      "content": "NZG_TR_007_Seq02_CytB2R (11)",
      "group": "3",
      "id": "218",
      "start": "2015-01-12"
    },
    {
      "content": "NZG_TR_007_PCR02_BirdFR (16)",
      "group": "2",
      "id": "219",
      "start": "2015-01-12"
    },
    {
      "content": "NZG_TR_009_PCR02_CytB (16)",
      "group": "2",
      "id": "220",
      "start": "2015-01-11"
    },
    {
      "content": "NZG_TR_009_Seq02_CytB1F (3)",
      "group": "3",
      "id": "221",
      "start": "2015-01-12"
    },
    {
      "content": "NZG_TR_009_Seq02_CytB2F (3)",
      "group": "3",
      "id": "222",
      "start": "2015-01-12"
    },
    {
      "content": "NZG_TR_008_PCR02_BirdFR (16)",
      "group": "2",
      "id": "223",
      "start": "2015-01-14"
    },
    {
      "content": "NZG_TR_008_PCR02_CytB (16)",
      "group": "2",
      "id": "224",
      "start": "2015-01-14"
    },
    {
      "content": "NZG_TR_008_Seq02_BirdF (4)",
      "group": "3",
      "id": "225",
      "start": "2015-01-14"
    },
    {
      "content": "NZG_TR_008_Seq02_BirdR (4)",
      "group": "3",
      "id": "226",
      "start": "2015-01-14"
    },
    {
      "content": "NZG_TR_008_Seq02_CytB1F (11)",
      "group": "3",
      "id": "227",
      "start": "2015-01-14"
    },
    {
      "content": "NZG_TR_008_Seq02_CytB2R (11)",
      "group": "3",
      "id": "228",
      "start": "2015-01-14"
    },
    {
      "content": "NZG_MR_009_PCR01_BirdF1_BirdR2 (16)",
      "group": "2",
      "id": "229",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_009_Seq02_BirdF1 (11)",
      "group": "3",
      "id": "230",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_009_Seq02_BirdR2 (11)",
      "group": "3",
      "id": "231",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_010_PCR02_BirdF1_BirdR2 (16)",
      "group": "2",
      "id": "232",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_010_Seq02_BirdF1 (16)",
      "group": "3",
      "id": "233",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_010_Seq02_BirdR2 (16)",
      "group": "3",
      "id": "234",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_012_PCR02_BirdF1_BirdR2 (13)",
      "group": "2",
      "id": "235",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_012_Seq02_BirdF1 (13)",
      "group": "3",
      "id": "236",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_012_Seq02_BirdR2 (13)",
      "group": "3",
      "id": "237",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_011_PCR02_BirdF1_BirdR2 (16)",
      "group": "2",
      "id": "238",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_011_Seq02_BirdF1 (16)",
      "group": "3",
      "id": "239",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_MR_011_Seq02_BirdR2 (16)",
      "group": "3",
      "id": "240",
      "start": "2015-02-16"
    },
    {
      "content": "NZG_TR_007_Seq02_BirdF1 (13)",
      "group": "3",
      "id": "241",
      "start": "2015-02-20"
    },
    {
      "content": "NZG_TR_007_Seq02_BirdR2 (13)",
      "group": "3",
      "id": "242",
      "start": "2015-02-20"
    },
    {
      "content": "NZG_MR_008_Seq02_BirdF1 (16)",
      "group": "3",
      "id": "243",
      "start": "2015-02-21"
    },
    {
      "content": "NZG_MR_008_Seq02_BirdR2 (16)",
      "group": "3",
      "id": "244",
      "start": "2015-02-21"
    },
    {
      "content": "NZG_TR_004_Seq02_BirdF1 (16)",
      "group": "3",
      "id": "245",
      "start": "2015-02-23"
    },
    {
      "content": "NZG_TR_004_Seq02_BirdR2 (16)",
      "group": "3",
      "id": "246",
      "start": "2015-02-23"
    },
    {
      "content": "NZG_MR_007_Seq02_BirdF1 (16)",
      "group": "3",
      "id": "247",
      "start": "2015-02-26"
    },
    {
      "content": "NZG_MR_007_Seq02_BirdR2 (16)",
      "group": "3",
      "id": "248",
      "start": "2015-02-26"
    },
    {
      "content": "NZG_TR_006_Seq02_BirdF1 (16)",
      "group": "3",
      "id": "249",
      "start": "2015-02-26"
    },
    {
      "content": "NZG_TR_006_Seq02_BirdR2 (16)",
      "group": "3",
      "id": "250",
      "start": "2015-02-26"
    },
    {
      "content": "SAIAB_MMW_001_PCR01_VF1T1_VR1T1 (6)",
      "group": "2",
      "id": "251",
      "start": "2014-10-30"
    },
    {
      "content": "SAIAB_MMW_001_PCR02_VF1T1_VR1T1 (48)",
      "group": "2",
      "id": "252",
      "start": "2014-10-31"
    },
    {
      "content": "SAIAB_MMW_001_PCR03_VF1T1_VR1T1 (15)",
      "group": "2",
      "id": "253",
      "start": "2014-11-13"
    },
    {
      "content": "SAIAB_MMW_001_PCR04_VF1T1_VR1T1 (8)",
      "group": "2",
      "id": "254",
      "start": "2014-11-14"
    },
    {
      "content": "SAIAB_MMW_001_Seq01_M13(-21)_F (24)",
      "group": "3",
      "id": "255",
      "start": "2014-11-18"
    },
    {
      "content": "SAIAB_MMW_001_Seq02_M13(-21)_F (17)",
      "group": "3",
      "id": "256",
      "start": "2014-11-28"
    },
    {
      "content": "SAIAB_MMW_001_Seq03_M13(-27)_R (48)",
      "group": "3",
      "id": "257",
      "start": "2014-12-04"
    },
    {
      "content": "SAIAB_MMW_001_X01 (48)",
      "group": "1",
      "id": "258",
      "start": "2014-10-09"
    },
    {
      "content": "SAIAB_TLB_001_PCR01_VF2t1_VR1t1 (16)",
      "group": "2",
      "id": "259",
      "start": "2014-12-12"
    },
    {
      "content": "SAIAB_TLB_001_Seq01_M13(-21)F (16)",
      "group": "3",
      "id": "260",
      "start": "2015-02-24"
    },
    {
      "content": "SAIAB_TLB_001_Seq01_M13(-27)R (16)",
      "group": "3",
      "id": "261",
      "start": "2015-02-24"
    },
    {
      "content": "SAIAB_TLB_001_X01 (16)",
      "group": "1",
      "id": "262",
      "start": "2014-10-09"
    },
    {
      "content": "SAIAB_TLB_002_PCR01_VF2t1_VR1t1 (23)",
      "group": "2",
      "id": "263",
      "start": "2015-02-04"
    },
    {
      "content": "SAIAB_TLB_002_PCR02_VF2t1_VR1t1 (3)",
      "group": "2",
      "id": "264",
      "start": "2015-02-05"
    },
    {
      "content": "SAIAB_TLB_002_Seq01_M13(-21)F (20)",
      "group": "3",
      "id": "265",
      "start": "2015-02-24"
    },
    {
      "content": "SAIAB_TLB_002_Seq01_M13(-27)R (20)",
      "group": "3",
      "id": "266",
      "start": "2015-02-24"
    },
    {
      "content": "SAIAB_TLB_002_X01 (23)",
      "group": "1",
      "id": "267",
      "start": "2015-02-02"
    },
    {
      "content": "SAIAB_TLB_003_PCR01_VF2t1_VR1t1 (24)",
      "group": "2",
      "id": "268",
      "start": "2015-02-11"
    },
    {
      "content": "SAIAB_TLB_003_PCR02_VF2t1_VR1t1 (4)",
      "group": "2",
      "id": "269",
      "start": "2015-02-12"
    },
    {
      "content": "SAIAB_TLB_003_Seq01_M13(-21)F (20)",
      "group": "3",
      "id": "270",
      "start": "2015-02-24"
    },
    {
      "content": "SAIAB_TLB_003_Seq01_M13(-27)R (20)",
      "group": "3",
      "id": "271",
      "start": "2015-02-24"
    },
    {
      "content": "SAIAB_TLB_003_X01 (24)",
      "group": "1",
      "id": "272",
      "start": "2015-02-09"
    },
    {
      "content": "ACDB_ZES_001_X01 (49)",
      "group": "1",
      "id": "273",
      "start": "2014-11-10"
    },
    {
      "content": "ACDB_ZES_001_X02_matK_Gym-F-R (49)",
      "group": "2",
      "id": "274",
      "start": "2014-12-04"
    },
    {
      "content": "ACDB_ZES_001_X02_rbcLa-F-R (49)",
      "group": "2",
      "id": "275",
      "start": "2014-12-04"
    },
    {
      "content": "ACDB_ZES_001_X03_matK_Gymn-M13F (49)",
      "group": "3",
      "id": "276",
      "start": "2014-12-04"
    },
    {
      "content": "ACDB_ZES_001_X03_matK_Gymn-M13R (49)",
      "group": "3",
      "id": "277",
      "start": "2014-12-04"
    },
    {
      "content": "ACDB_ZES_001_X03_rbcLa-M13F (49)",
      "group": "3",
      "id": "278",
      "start": "2014-12-04"
    },
    {
      "content": "ACDB_ZES_001_X03_rbcLa-M13R (49)",
      "group": "3",
      "id": "279",
      "start": "2014-12-04"
    },
    {
      "content": "ACDB_ZES_002_X01 (19)",
      "group": "1",
      "id": "280",
      "start": "2014-12-04"
    },
    {
      "content": "ACDB_ZES_002_X02_matK_Gym-F-R (19)",
      "group": "2",
      "id": "281",
      "start": "2014-12-05"
    },
    {
      "content": "ACDB_ZES_002_X02_rbcLa-F-R (19)",
      "group": "2",
      "id": "282",
      "start": "2014-12-05"
    },
    {
      "content": "ACDB_ZES_002_X03_matK-M13F (16)",
      "group": "3",
      "id": "283",
      "start": "2014-12-05"
    },
    {
      "content": "ACDB_ZES_002_X03_matK-M13R (16)",
      "group": "3",
      "id": "284",
      "start": "2014-12-05"
    },
    {
      "content": "ACDB_ZES_002_X03_rbcLa-M13F (17)",
      "group": "3",
      "id": "285",
      "start": "2014-12-05"
    },
    {
      "content": "ACDB_ZES_002_X03_rbcLa-M13R (17)",
      "group": "3",
      "id": "286",
      "start": "2014-12-05"
    }
  ]
};