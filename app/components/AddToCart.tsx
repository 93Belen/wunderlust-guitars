import { useWebStore } from "components/store";
import { Product } from "components/types/storeTypes";

export default function AddToCart({ guitar }: { guitar: Product }) {
  const store = useWebStore();

  const addGuitarToCart = () => {
    const existingGuitar = store.cart.find(
      (item) => item.id === guitar.id
    );

    if (!existingGuitar) {
      store.addToCart(guitar);
    } else {
      window.alert("This guitar is already in your cart");
    }
  };

  return (
    <button
      onClick={addGuitarToCart}
      className='py-[0.5rem] px-[1rem] bg-purple font-mono text-white rounded-lg md:text-[1.125rem] text-[0.8rem] font-normal w-[8rem] active:bg-[#394293]'
    >
      Add to Cart
    </button>
  );
}
