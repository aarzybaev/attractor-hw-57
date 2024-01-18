import React from 'react';
import {User} from '../../type';
interface Props {
  user: User;
}
const UserItem: React.FC<Props>= ({user}) => {
  return (
    <div className="card mb-2">
      <div className="row g-0">
        <div className="col-sm">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">E-mail: {user.email}</p>
            <p className="card-text">Role: {user.role}</p>
            <p className="card-text">Status: {user.isActive?'Active':'Not active'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;