import { TABS } from "../redux/actions/type";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/actions";

const Tabs = () => {
  const dispatch = useDispatch();
  return TABS.map((tab) => (
    <button className='button' onClick={() => dispatch(toggleTab(tab))}>
      {tab}
    </button>
  ));
};
export default Tabs;
