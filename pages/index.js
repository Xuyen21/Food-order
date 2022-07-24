import { Fragment } from "react";
import axios from "axios";
function Hompage({foodlist}) {
  console.log(foodlist)
  return (
    <Fragment>
      <h1>Let us order some food</h1>

    </Fragment>
  );
}

export async function getServerSideProps() {
  const res = axios.get('http://localhost:3000/api/products')
  return {
    props: { foodlist: res.data },
  };
}
export default Hompage;
