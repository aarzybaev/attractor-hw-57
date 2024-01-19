import React, {useState} from 'react';
import {ROLES} from '../../constants';
import {User, UserMutation} from '../../type';

interface Props {
  onSubmit: (user: User) => void;
}
const UserForm: React.FC<Props> = ({onSubmit}) => {

  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    isActive: true,
    role: ''
  });
  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(e.target.value);
    setUser(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const changeIsActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => ({...prev, [e.target.name]: e.target.checked}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user
    });

  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">e-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="form-select"
          value={user.role}
          onChange={changeUser}
        >
          <option value="">Select a user role</option>
          {
            ROLES.map(role => (
              <option key={role} value={role}>{role}</option>
            ))
          }
        </select>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="isActive">Is Active?</label><br/>
        <input
          type="checkbox"
          name="isActive"
          id="isActive"
          className="form-check-input"
          checked={user.isActive}
          onChange={changeIsActive}
        />
      </div>

      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
};

export default UserForm;
