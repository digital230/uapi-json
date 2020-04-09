const uAPI = require('../../index');
const config = require('../../test/testconfig');


const AirService = uAPI.createAirService({
  auth: config,
  debug: 2,
  production: true,
});

const params = {
  commission: {
    amount: 'UAH1',
  },
  fop: {
    type: 'Cash',
  },
  pnr: 'J1KFZJ',
};

AirService.ticket(params).then(
  data => console.log(data),
  err => console.log(err)
);
