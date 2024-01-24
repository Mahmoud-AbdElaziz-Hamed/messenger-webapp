import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconInputField } from "../../components/IconInputField";
import { UserItemList } from "../UserItemList";

export const ConversationsPanel = ({ value, onChange, onSubmit }) => {
  return (
    <aside className="bg-white hidden lg:flex md:flex xl:flex flex-col w-1/4 p-4 border-r-2">
      <div className="bg-slate-100 flex rounded-xl border-2">
        <IconInputField
          icon={faMagnifyingGlass}
          placeholder="Search ......"
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
      <UserItemList />
    </aside>
  );
};
