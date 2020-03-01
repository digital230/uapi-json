module.exports = `
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope 
	xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <soapenv:Header />
    <soapenv:Body>
        <air:SeatMapReq 
			xmlns:air="http://www.travelport.com/schema/air_v49_0" xmlns:common_v49_0="http://www.travelport.com/schema/common_v49_0" AuthorizedBy="user" 
			ReturnSeatPricing="true" 
			TargetBranch="TRGT_BRCH" 
			TraceId="trace">
            <com:BillingPointOfSaleInfo 
				xmlns:com="http://www.travelport.com/schema/common_v49_0" OriginApplication="UAPI" />
            <air:AirSegment 
				ArrivalTime={{arivalTime}} 
				CabinClass={{CabinClass}} 
				ClassOfService="U" 
				DepartureTime={{DepartureTime}} 
				Destination="MSP" 
				Distance="693" 
				ETicketability="Yes" 
				ElStat="A" 
				Equipment="M90" 
				FlightNumber="2149" 
				Group="0" 
				GuaranteedPaymentCarrier="No" 
				Key="6gJmGAx9Q1qI4z70647nnA==" 
				LinkAvailability="true" 
				OptionalServicesIndicator="false" 
				Origin="DEN" 
				ParticipantLevel="Secure Sell" 
				ProviderCode="1G" ProviderReservationInfoRef="dHXeXL3iTIyiLgcgZKmwMg==" Status="HK" 
				TravelOrder="1" 
				TravelTime="116">
				Carrier={{}} 
				ChangeOfPlane="false" 
                <air:FlightDetails ArrivalTime="2015-10-19T18:38:00.000-05:00" DepartureTime="2015-10-19T15:42:00.000-06:00" Destination="MSP" DestinationTerminal="1" ElStat="A" Equipment="M90" FlightTime="116" Key="CY4rvWivQJ2MSStGEUqnuQ==" Origin="DEN" TravelTime="116" />
                <common_v49_0:SellMessage>ARRIVES MSP TERMINAL 1</common_v49_0:SellMessage>
                <common_v49_0:SellMessage>*6**SKY PRIORITY IN F*</common_v49_0:SellMessage>
            </air:AirSegment>
            <air:SearchTraveler Code="ADT" Key="gr8AVWGCR064r57Jt0+8bA==">
                <com:Name xmlns:com="http://www.travelport.com/schema/common_v49_0" First="Jack" Last="Smith" Prefix="Mr" />
            </air:SearchTraveler>
            <air:HostReservation Carrier="DL" CarrierLocatorCode="GKZAOA" ProviderCode="1G" ProviderLocatorCode="DDBJVO" />
        </air:SeatMapReq>
    </soapenv:Body>
</soapenv:Envelope>
`;
