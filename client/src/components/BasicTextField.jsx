import BasicTextFieldWrapper from '../styled/components/BasicTextFieldWrapper';

const BasicTextField = ({label, id, type, icon, name, placeholder, fieldState, setFieldState}) => {
	const Icon = icon;
	const onFieldChange = (event) => {
		// If user changes the value of the field, automatically remove the invalid state
		if(setFieldState) setFieldState({value: event.target.value, valid: true});
	}
	return (
		<BasicTextFieldWrapper>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				name={name}
				placeholder={placeholder}
				{...fieldState && !fieldState.valid && {className: 'invalid'}}
				onChange={onFieldChange}
			/>
			{Icon && <Icon className="form-input-icon" />}
		</BasicTextFieldWrapper>
	);
}

export default BasicTextField;