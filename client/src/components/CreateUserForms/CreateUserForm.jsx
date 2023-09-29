import PropTypes from "prop-types";
import {
  Container,
  Form,
  ImageContainer,
  InputContainer,
  NameContainer,
} from "./CreateUserForm.styled";

function CreateUserForm({
  handleInputChange,
  handleFormSubmit,
  handleCancel,
  handleFileChange,
  image,
  handleDeleteImage,
}) {
  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <div className="check">
          <ImageContainer>
            <figure>
              <img src={image}></img>
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
                ></input>
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" onChange={handleInputChange} required>
                  <option value="" disabled={false}>
                    -- Please select Gender --
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label htmlFor="birthDate">Birthday</label>

                {/* 7 years old - 60 years old */}
                <input
                  type="date"
                  name="birthDate"
                  id="birthday"
                  onChange={handleInputChange}
                  required
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
          <button type="submit">SAVE</button>
        </div>
      </Form>
    </Container>
  );
}

CreateUserForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default CreateUserForm;
