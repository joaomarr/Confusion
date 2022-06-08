import { React, Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderCard({ item, isLoading, errMess }) {
  console.log(item, isLoading, errMess);
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else if (item) {
    return (
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard
              item={this.props.promotion}
              isLoading={this.props.promosLoading}
              errMess={this.props.promosErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={this.props.promotion}
              sLoading={this.props.promosLoading}
              errMess={this.props.promosErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={this.props.leader}
              sLoading={this.props.promosLoading}
              errMess={this.props.promosErrMess}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
