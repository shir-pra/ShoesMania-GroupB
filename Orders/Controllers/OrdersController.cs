using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Orders.Commands;
using Orders.Models.DTOs;

namespace Orders.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OrdersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        [Route("placeOrder")]
        public async Task<IActionResult> PlaceOrder(OrderRequestDto placeOrder)
        {
            var response = await _mediator.Send(new AddOrderCommand(placeOrder));
            return Ok(response);
        }
    }
}
