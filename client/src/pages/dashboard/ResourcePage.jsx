import ResourceWrapper from "../../styled/pages/dashboard/ResourceWrapper";
import underConstructionImg from '../../assets/images/under-construction.svg';

const ResourcePage = () => {
	return (
		<ResourceWrapper>
			<h1>Resource Page - Under construction</h1>
			<img src={underConstructionImg} title="Under Construction" />
		</ResourceWrapper>
	)
};

export default ResourcePage;