import BasicTextWrapper from '../styled/components/BasicTextFieldWrapper';

const BasicTextField = ({ id, name, type, labelText, placeholder, initialValue, setValue }) => {
	const onFieldChange = (event) => {
		setValue(event.target.value);
	}
	return (
		<BasicTextWrapper>
			<label htmlFor={id}>{labelText ? labelText : name}</label>
			<input id={id} name={name} type={type} placeholder={placeholder}
				value={initialValue} onChange={onFieldChange}
			/>
		</BasicTextWrapper>
	)
};

export default BasicTextField;