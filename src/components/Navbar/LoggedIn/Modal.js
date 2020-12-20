import React from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    console.log(val);
      val === null && (valid = false);
  });

  return valid;
};

class ModalPop extends React.Component {
  state = {
    title: null,
    price: null,
    stock: null,
    description: 'noDesc',
    selectedFile: 'noImg',
    formErrors: {
      title: "",
      price: "",
      stock: "",
      description: "",
      img: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      this.props.submitHandler(this.state);
      this.setState({
        title: null,
        price: null,
        stock: null,
        description: null,
        selectedFile: 'noImg',
        formErrors: {
          title: "",
          price: "",
          stock: "",
          description: "",
        },
      });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "title":
        formErrors.title =
          value.length < 3 ? "Minimum 3 characaters required!" : "";
        break;
      case "price":
        formErrors.price = value <= 0 ? "Price must be greater than Zero!" : "";
        break;
      case "description":
        formErrors.description = value <= 0 ? "Description must be greater than Zero!" : "";
        break;
      case "stock":
        formErrors.stock = value < 1 ? "Minimum 1 product Required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form
          encType="multipart/form-data"
          onSubmit={this.handleSubmit}
          className="productform"
        >
          <div onClick={this.props.onHide} className="crossIcon">
            <i class="close big icon"></i>
          </div>
          <div>
            <div>Product Title :<i class="tiny red asterisk icon"></i></div>
            <div className="dataEntryDivs">
              <input
                type="text"
                className={formErrors.title.length > 0 ? "error" : null}
                name="title"
                placeholder="Product Title"
                onChange={this.handleChange}
                required
              />
              {formErrors.title.length > 0 && (
                <span className="errorMessage">{formErrors.title}</span>
              )}
            </div>
          </div>

          <div>
            <div>Price :<i class="tiny asterisk red icon"></i></div>
            <div className="dataEntryDivs">
              <input
                type="number"
                className={formErrors.price.length > 0 ? "error" : null}
                name="price"
                placeholder="Product Price"
                onChange={this.handleChange}
                required
              />
              {formErrors.price.length > 0 && (
                <span className="errorMessage">{formErrors.price}</span>
              )}
            </div>
          </div>

          <div>
            <div>Description :</div>
            <div className="dataEntryDivs">
              <textarea
                type="text"
                className={formErrors.description.length > 0 ? "error" : null}
                name="description"
                placeholder="Product description"
                onChange={this.handleChange}
                // required
              />
              {formErrors.description.length > 0 && (
                <span className="errorMessage">{formErrors.description}</span>
              )}
            </div>
          </div>

          <div>
            <div>Stock :<i class="tiny asterisk red icon"></i></div>
            <div className="dataEntryDivs">
              <input
                type="number"
                className={formErrors.stock.length > 0 ? "error" : null}
                name="stock"
                placeholder="Number of Products available"
                onChange={this.handleChange}
                required
              />
              {formErrors.stock.length > 0 && (
                <span className="errorMessage">{formErrors.stock}</span>
              )}
            </div>
          </div>

          <div>
            <div>Upload Img : </div>
            <div className="dataEntryDivs imgUpload">
              <input
                name="img"
                // required
                onChange={this.fileChangedHandler}
                type="file"
              ></input>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Modal>
    );
  }
}

export default ModalPop;
