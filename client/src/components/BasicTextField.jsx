import BasicTextWrapper from '../styled/components/BasicTextFieldWrapper';

const BasicTextField = ({ id, name, type, labelText, placeholder }) => {
	return (
		<BasicTextWrapper>
			<label htmlFor={id}>{labelText ? labelText : name}</label>
			<input id={id} name={name} type={type} placeholder={placeholder} />
		</BasicTextWrapper>
	)
};

export default BasicTextField;