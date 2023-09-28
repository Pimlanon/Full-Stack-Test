import {
  Container,
  Form,
  ImageContainer,
  InputContainer,
  NameContainer,
} from './CreateUserForm.styled';

function CreateUserForm() {
  return (
    <Container>
      <Form>
        <div className="check">
          <ImageContainer>
            <figure></figure>
            <div className="image-btn">
              <button>Upload Profile Picture</button>
              <button>Delete Picture</button>
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
                ></input>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Please enter Last name"
                ></input>
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select name="Gender">
                  <option value="" disabled={true}>
                    -- Please select Gender --
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" name="birthday" id="birthday"></input>
              </div>
            </NameContainer>
          </InputContainer>
        </div>
        <div className="btn-container">
          <button>CANCEL</button>
          <button>SAVE</button>
        </div>
      </Form>
    </Container>
  );
}

export default CreateUserForm;
