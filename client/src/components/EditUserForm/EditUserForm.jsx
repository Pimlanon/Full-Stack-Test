import BarLoader from "react-spinners/BarLoader";
import {
  Container,
  Form,
  ImageContainer,
  InputContainer,
  NameContainer,
} from "../CreateuserForms/CreateUserForm.styled";

function EditUserForm({
  handleFormSubmit,
  handleInputChange,
  userData,
  handleCancel,
  handleFileChange,
  image,
  handleDeleteImage,
  isSending,
}) {
  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <div className="check">
          <ImageContainer>
            <figure>
              <img src={image || userData.picture}></img>
            </figure>
            <div className="image-btn">
              <div>
                <label className="input-field-label" htmlFor="fileInput">
                  Choose file
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="input-field"
                  name="img"
                  id="fileInput"
                  onChange={handleFileChange}
                />
              </div>
              <button
                onClick={(e) => {
                  handleDeleteImage(e);
                }}
              >
                Delete Picture
              </button>
            </div>
          </ImageContainer>
          <InputContainer>
            <NameContainer>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Please enter First name"
                  onChange={handleInputChange}
                  required
                  value={userData.firstName}
                ></input>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Please enter Last name"
                  onChange={handleInputChange}
                  required
                  value={userData.lastName}
                ></input>
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  onChange={handleInputChange}
                  value={userData.gender}
                >
                  <option value="" disabled={true}>
                    -- Please select Gender --
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer-not-to-say" defaultValue>
                    Prefer not to say
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="birthDate">Birthday</label>
                <input
                  type="date"
                  name="birthDate"
                  id="birthday"
                  onChange={handleInputChange}
                  value={userData.birthDate}
                  max={new Date(
                    new Date().getFullYear() - 7,
                    new Date().getMonth(),
                    new Date().getDate()
                  )
                    .toISOString()
                    .slice(0, 10)}
                  min={new Date(
                    new Date().getFullYear() - 60,
                    new Date().getMonth(),
                    new Date().getDate()
                  )
                    .toISOString()
                    .slice(0, 10)}
                ></input>
              </div>
            </NameContainer>
          </InputContainer>
        </div>
        <div className="btn-container">
          <button onClick={handleCancel}>CANCEL</button>
          <button type="submit">
            SAVE
            {isSending && (
              <BarLoader
                color="#ffffff"
                width={100}
                loading={isSending}
                className="bar-loader"
              />
            )}
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default EditUserForm;
