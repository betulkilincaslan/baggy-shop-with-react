import CartItem from "components/cart/CartItem";

const CartScreen = () => {
  return (
    <section className="py-12 text-center w-full min-h-max">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="px-2 py-4 md:col-span-2">
          <div class="flex justify-between border-b pb-6">
            <h1 class="font-semibold">Shopping Cart</h1>
            <h2 class="font-semibold">3 Items</h2>
          </div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-x-auto">
                  <table class="min-w-full">
                    <thead class="border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <CartItem />
                      <CartItem />
                      <CartItem />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="flex flex-col gap-6 px-4 py-6 bg-gray-50">
            <h3 className="font-semibold text-lg leading-5">Summary</h3>
            <div className="flex flex-col gap-4 justify-center border-gray-200 border-b pb-4">
              <div className="flex justify-between items-center">
                <p className="text-base leading-4 text-gray-800">Subtotal</p>
                <p className="text-base leading-4 text-gray-600">$56.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-base leading-4 text-gray-800">Discount </p>
                  <span className="p-1 text-xs font-medium leading-3  text-gray-800">
                    (STUDENT)
                  </span>
                </div>
                <p className="text-base leading-4 text-gray-600">
                  -$28.00 (50%)
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-base leading-4 text-gray-800">Shipping</p>
                <p className="text-base leading-4 text-gray-600">$8.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-base font-semibold leading-4 text-gray-800">
                Total
              </p>
              <p className="text-base font-semibold leading-4 text-gray-600">
                $36.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartScreen;
