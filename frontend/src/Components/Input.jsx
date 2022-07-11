import { useDispatch } from "react-redux";
import { StyledInput } from "../Styles/Input.styled";
import { handleVerificationInput } from "../features/auth/authSlice";

const Input = ({ name, type, placeholder }) => {
  const dispatch = useDispatch();

  return (
    <label>
      <StyledInput
        type={type}
        name={name}
        required
        placeholder={placeholder}
        onChange={e =>
          dispatch(
            handleVerificationInput({ value: e.target.value, inputName: name })
          )
        }
      />
    </label>
  );
};
export default Input;
