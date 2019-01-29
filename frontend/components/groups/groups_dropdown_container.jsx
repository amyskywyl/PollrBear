import { connect } from "react-redux";
import GroupsDropdown from './groups_dropdown';

const msp = state => ({
  groups: Obrject.values(state.entities.groups)
})

export default connect(msp, null)(GroupsDropdown);