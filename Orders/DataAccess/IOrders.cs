using Orders.Models;
using Orders.Models.DTOs;

namespace Orders.DataAccess
{
    public interface IOrders
    {
        Task<OrderPlacedResponseDto> PlaceOrder(OrderRequestDto placeOrder);


    }
}
