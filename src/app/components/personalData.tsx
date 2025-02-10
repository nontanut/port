"use client";

export const PersonalData = (props: {
  name: string;
  setName: (value: string) => void;
  surname: string;
  setSurname: (value: string) => void;
  birthday: string;
  setBirthday: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  zipcode: string;
  setZipcode: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
  error: string | null;
  step: number;
  setStep: (value: number) => void;
}) => {
  return (
    <div className="container-fluid d-flex flex-column px-5">
      <h3 className="fw-bold text-white text-center">Persoanal Data</h3>
      {props.error && <p className="text-danger text-center">{props.error}</p>}

      <label className="my-2 w-100">
        Name
        <input
          className="form-control w-100"
          name="name"
          type="text"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
          aria-label="name"
        />
      </label>

      <label className="my-2 w-100">
        Surname
        <input
          className="form-control w-100"
          name="surname"
          type="text"
          value={props.surname}
          onChange={(e) => props.setSurname(e.target.value)}
          aria-label="surname"
        />
      </label>

      <label className="my-2 w-100">
        Phone
        <input
          className="form-control w-100"
          name="phone"
          type="text"
          value={props.phone}
          onChange={(e) => props.setPhone(e.target.value)}
          aria-label="phone"
        />
      </label>

      <label className="my-2 w-100">
        Birthday
        <input
          className="form-control w-100"
          name="birthday"
          type="date"
          value={props.birthday}
          onChange={(e) => props.setBirthday(e.target.value)}
          aria-label="birthday"
        />
      </label>

      <label className="my-2 w-100">
        Gender
        <select
          name="gender"
          className="form-select w-100"
          value={props.gender}
          onChange={(e) => props.setGender(e.target.value)}
        >
          <option value="F">Female</option>
          <option value="M">Male</option>
        </select>
      </label>

      <label className="my-2 w-100">
        Address
        <input
          className="form-control w-100"
          name="address"
          type="text"
          value={props.address}
          onChange={(e) => props.setAddress(e.target.value)}
          aria-label="address"
        />
      </label>

      <label className="my-2 w-100">
        Zipcode
        <input
          className="form-control w-100"
          name="zipcode"
          type="text"
          value={props.zipcode}
          onChange={(e) => props.setZipcode(e.target.value)}
          aria-label="zipcode"
        />
      </label>
    </div>
  );
};
