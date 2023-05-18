import React, { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";

const AccountLeft = () => {
  const { globalStore } = useContext(MobXProviderContext);
  const add = () => {
    const { count } = globalStore;
    globalStore.setCount(count + 1);
  };
  return (
    <div className="accountLeft">
      <div>{globalStore.count} *100</div>
      <button onClick={() => add()}>add count</button>
    </div>
  );
};

const ObAccountLeft = observer(AccountLeft);

const AccountRight = () => {
  const { globalStore } = useContext(MobXProviderContext);
  const { total } = globalStore;

  return (
    <div className="accountLeft">
      <div>total: {total}</div>
    </div>
  );
};

const ObAccountRight = observer(AccountRight);

const AccountPage = () => {
  return (
    <div>
      <h2>账号</h2>
      <ObAccountLeft />
      <ObAccountRight />
    </div>
  );
};

export default AccountPage;
