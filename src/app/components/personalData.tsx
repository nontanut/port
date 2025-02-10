"use client";
export const PersonalData = (porps: {
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
  console.log(porps.gender);
  return (
    <>
      <h1 className="fw-bold text-white">Register</h1>
      {porps.error && <p className="text-danger text-center">{porps.error}</p>}
      <label className="my-2">
        Name
        <br />
        <input
          className="form-control"
          name="name"
          type="text"
          value={porps.name}
          onChange={(e) => porps.setName(e.target.value)}
          aria-label="name"
        />
      </label>
      <label className="my-2">
        Surname
        <br />
        <input
          className="form-control"
          name="surname"
          type="text"
          value={porps.surname}
          onChange={(e) => porps.setSurname(e.target.value)}
          aria-label="surname"
        />
      </label>
      <label className="my-2">
        Phone
        <br />
        <input
          className="form-control"
          name="phone"
          type="text"
          value={porps.phone}
          onChange={(e) => porps.setPhone(e.target.value)}
          aria-label="phone"
        />
      </label>
      <label className="my-2">
        Birthday
        <br />
        <input
          className="form-control"
          style={{ minWidth: "100%", width: "100%" }}
          name="birthday"
          type="date"
          value={porps.phone}
          onChange={(e) => porps.setPhone(e.target.value)}
          aria-label="birthday"
        />
      </label>
      <label className="my-2">
        Gender
        <br />
        <select
          name="gender"
          className="form-control"
          value={porps.gender}
          onChange={(e) => porps.setGender(e.target.value)}
        >
          <option value="F">Female</option>
          <option value="M">Male</option>
        </select>
      </label>
      <label className="my-2">
        Address
        <br />
        <input
          className="form-control"
          name="address"
          type="text"
          value={porps.address}
          onChange={(e) => porps.setAddress(e.target.value)}
          aria-label="address"
        />
      </label>
      <label className="my-2">
        Zipcode
        <br />
        <input
          className="form-control"
          name="zipcode"
          type="text"
          value={porps.zipcode}
          onChange={(e) => porps.setZipcode(e.target.value)}
          aria-label="zipcode"
        />
      </label>
    </>
  );
};
