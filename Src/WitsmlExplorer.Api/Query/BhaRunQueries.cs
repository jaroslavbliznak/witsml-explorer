using System;
using System.Globalization;

using Witsml.Data;
using Witsml.Data.Measures;
using Witsml.Extensions;

using WitsmlExplorer.Api.Models;

namespace WitsmlExplorer.Api.Query
{
    public static class BhaRunQueries
    {
        public static WitsmlBhaRuns GetWitsmlBhaRunByUid(string wellUid, string wellboreUid, string bhaRunUid)
        {
            return new WitsmlBhaRuns
            {
                BhaRuns = new WitsmlBhaRun
                {
                    Uid = bhaRunUid,
                    WellUid = wellUid,
                    WellboreUid = wellboreUid,
                    WellName = "",
                    WellboreName = "",
                    Name = "",
                    NumStringRun = "",
                    Tubular = new WitsmlObjectReference
                    {
                        Value = ""
                    },
                    DTimStart = "",
                    DTimStop = "",
                    DTimStartDrilling = "",
                    DTimStopDrilling = "",
                    PlanDogleg = new WitsmlAnglePerLengthMeasure(),
                    ActDogleg = new WitsmlAnglePerLengthMeasure(),
                    ActDoglegMx = new WitsmlAnglePerLengthMeasure(),
                    StatusBha = "",
                    NumBitRun = "",
                    ReasonTrip = "",
                    ObjectiveBha = "",
                    CommonData = new WitsmlCommonData()
                    {
                        ItemState = "",
                        SourceName = "",
                        DTimLastChange = "",
                        DTimCreation = "",
                        ServiceCategory = "",
                        Comments = "",
                        DefaultDatum = "",
                        AcquisitionTimeZone = ""
                    }
                }.AsSingletonList()
            };
        }

        public static WitsmlBhaRuns GetWitsmlBhaRunByWellbore(string wellUid, string wellboreUid)
        {
            return new WitsmlBhaRuns
            {
                BhaRuns = new WitsmlBhaRun
                {
                    Uid = "",
                    WellUid = wellUid,
                    WellboreUid = wellboreUid,
                    WellName = "",
                    WellboreName = "",
                    Name = "",
                    NumStringRun = "",
                    Tubular = new WitsmlObjectReference
                    {
                        Value = ""
                    },
                    DTimStart = "",
                    DTimStop = "",
                    DTimStartDrilling = "",
                    DTimStopDrilling = "",
                    PlanDogleg = new WitsmlAnglePerLengthMeasure(),
                    ActDogleg = new WitsmlAnglePerLengthMeasure(),
                    ActDoglegMx = new WitsmlAnglePerLengthMeasure(),
                    StatusBha = "",
                    NumBitRun = "",
                    ReasonTrip = "",
                    ObjectiveBha = "",
                    CommonData = new WitsmlCommonData()
                    {
                        ItemState = "",
                        SourceName = "",
                        DTimLastChange = "",
                        DTimCreation = "",
                        ServiceCategory = "",
                        Comments = "",
                        DefaultDatum = "",
                        AcquisitionTimeZone = ""
                    }
                }.AsSingletonList()
            };
        }
    }
}
