// starting mongoose
var mongoose 		= require('mongoose');
// models
var ServiceOrders 	= mongoose.model('ServiceOrders');
var User			= mongoose.model('User');

// Renders the Service Details page based on the id required
exports.servicedetails = function(req, res)
{
	var soId = req.query.id;

	ServiceOrders.findById(soId)
	.populate('_CreatedBy')
	.exec(function(err, so)
	{
		if(err)
			console.log('OOPS!!! Error!');
		else
		{
			console.log(so)
			res.render('servicedetails', {serviceorder : so});
		}
	});
}