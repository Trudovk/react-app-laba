import { Avatar } from "antd";

type StaffMember = {
  avatar: string;
  division: string;
  email: string;
  fio: string;
  id: string;
  post: string;
};

export const StaffList = ({ staff }: { staff: StaffMember[] }) => {
  console.log(staff);
  return (
    <ul>
      {staff.map((person, index) => (
        <li key={index} className="staff-list__li">
          {person.avatar !== "" ? (
            <Avatar
              className="staff-list__avatar"
              size={64}
              src={person.avatar}
            />
          ) : (
            <Avatar
              className="staff-list__avatar"
              size={64}
              style={{ backgroundColor: "gray" }}
            />
          )}
          <div className="staff-list__information">
            <h2 className="staff-list__fia">{person.fio}</h2>
            <p className="staff-list__division">{person.division}</p>
            <p className="staff-list__post">{person.post}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
