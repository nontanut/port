export const Stepper = () => {
  return (
    <div height="800px" className="stepper" id="stepper">
      <div className="steps-container">
        <div className="steps">
          <div className="step" icon="fa fa-pencil-alt" id="1">
            <div className="step-title">
              <span className="step-number">01</span>
              <div className="step-text">Basic Information</div>
            </div>
          </div>
          <div className="step" icon="fa fa-info-circle" id="2">
            <div className="step-title">
              <span className="step-number">02</span>
              <div className="step-text">Personal Data</div>
            </div>
          </div>
          <div className="step" icon="fa fa-book-reader" id="3">
            <div className="step-title">
              <span className="step-number">03</span>
              <div className="step-text">Terms and Conditions</div>
            </div>
          </div>
          <div className="step" icon="fa fa-check" id="4">
            <div className="step-title">
              <span className="step-number">04</span>
              <div className="step-text">Finish</div>
            </div>
          </div>
        </div>
      </div>
      <div className="stepper-content-container">
        <div className="stepper-content fade-in" stepper-label="1">
          <div
            className="w-100 h-100"
            style={{ padding: "30px 10px", background: "#f9f9f9" }}
          >
            <div
              className="my-0 mx-auto"
              style={{
                maxWidth: "500px",
                borderRadius: "10px",
                background: "#f5f5f5",
              }}
            >
              <div className="p-10 d-flex flex-column justify-content-center align-items-center">
                <div className="text-center pt-20 pe-0 pb-10 ps-0 fw-bold">
                  Step 1
                </div>
                <div className="p-10 d-flex flex-column justify-content-center align-items-center w-100">
                  <label className="text-muted mb-2"> Username </label>
                  <div className="cdb-form">
                    <input type="text" className="form-control bg-light" />
                  </div>
                  <label className="text-muted mb-2"> Email </label>
                  <div className="cdb-form">
                    <input type="text" className="form-control bg-light" />
                  </div>
                  <label className="text-muted mb-2"> Password </label>
                  <div className="cdb-form">
                    <input type="password" className="form-control bg-light" />
                  </div>
                  <label className="text-muted mb-2"> Confirm Password </label>
                  <div className="cdb-form">
                    <input type="password" className="form-control bg-light" />
                  </div>
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <button
                      className="btn btn-dark btn-block mb-3 mt-5 ms-auto"
                      onclick="stepper.navigate('2')"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stepper-content fade-in" stepper-label="2">
          <div
            className="w-100 h-100"
            style="padding: 30px 10px; background: #f9f9f9"
          >
            <div
              className="my-0 mx-auto"
              style="max-width: 500px; border-radius: 10px; background: #f5f5f5"
            >
              <div className="p-10 d-flex flex-column justify-content-center align-items-center">
                <div className="text-center pt-20 pe-0 pb-10 ps-0 fw-bold">
                  Step 2
                </div>
                <div className="p-10 d-flex flex-column justify-content-center align-items-center w-100">
                  <label className="text-muted mb-2"> First Name </label>
                  <div className="cdb-form">
                    <input type="text" className="form-control bg-light" />
                  </div>
                  <label className="text-muted mb-2"> Last Name </label>
                  <div className="cdb-form">
                    <input type="email" className="form-control bg-light" />
                  </div>
                  <label className="text-muted mb-2"> Phone Number </label>
                  <div className="cdb-form">
                    <input type="text" className="form-control bg-light" />
                  </div>
                  <label className="text-muted mb-2"> Address </label>
                  <div className="cdb-form">
                    <input type="email" className="form-control bg-light" />
                  </div>
                  <label className="text-muted mb-2"> Country </label>
                  <div className="cdb-form">
                    <input type="text" className="form-control bg-light" />
                  </div>

                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <button
                      className="btn btn-dark btn-block mb-3 mt-5"
                      onclick="stepper.navigate('1')"
                    >
                      Previous
                    </button>
                    <button
                      className="btn btn-dark btn-block mb-3 mt-5"
                      onclick="stepper.navigate('3')"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stepper-content fade-in" stepper-label="3">
          <div
            className="w-100 h-100"
            style="padding: 30px 10px; background: #f9f9f9"
          >
            <div
              className="my-0 mx-auto"
              style="max-width: 500px; border-radius: 10px; background: #f5f5f5"
            >
              <div className="p-10 d-flex flex-column justify-content-center align-items-center">
                <div className="text-center pt-20 pe-0 pb-10 ps-0 fw-bold">
                  Step 3
                </div>
                <div className="p-10 d-flex flex-column justify-content-center align-items-center w-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Qui dicta minus molestiae vel beatae natus eveniet ratione
                    temporibus aperiam harum alias officiis assumenda officia
                    quibusdam deleniti eos cupiditate dolore doloribus!
                  </p>
                  <p>
                    Ad dolore dignissimos asperiores dicta facere optio quod
                    commodi nam tempore recusandae. Rerum sed nulla eum vero
                    expedita ex delectus voluptates rem at neque quos facere
                    sequi unde optio aliquam!
                  </p>
                  <p>
                    Ad dolore dignissimos asperiores dicta facere optio quod
                    commodi nam tempore recusandae. Rerum sed nulla eum vero
                    expedita ex delectus voluptates rem at neque quos facere
                    sequi unde optio aliquam!
                  </p>
                  <p>
                    Ad dolore dignissimos asperiores dicta facere optio quod
                    commodi nam tempore recusandae. Rerum sed nulla eum vero
                    expedita ex delectus voluptates rem at neque quos facere
                    sequi unde optio aliquam!
                  </p>
                </div>
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <button
                    className="btn btn-dark btn-block mb-3 mt-5"
                    onclick="stepper.navigate('2')"
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-dark btn-block mb-3 mt-5"
                    onclick="stepper.navigate('4')"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stepper-content fade-in" stepper-label="4">
          <div
            className="w-100 h-100"
            style="padding: 30px 10px; background: #f9f9f9"
          >
            <div
              className="my-0 mx-auto"
              style="max-width: 500px; border-radius: 10px; background: #f5f5f5"
            >
              <div className="p-10 d-flex flex-column justify-content-center align-items-center">
                <div className="text-center pt-20 pe-0 pb-10 ps-0 fw-bold">
                  Step 4
                </div>
                <div className="p-10 d-flex flex-column justify-content-center align-items-center w-100">
                  <div className="text-center">
                    Congratulations! You have completed this process.
                    <span role="img" aria-label="image">
                      {" "}
                      🎉{" "}
                    </span>
                  </div>
                </div>
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <button
                    className="btn btn-dark btn-block mb-3 mt-5"
                    onclick="stepper.navigate('3')"
                  >
                    Previous
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
