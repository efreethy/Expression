(function (root) {


  root.UploadImageButton = React.createClass({

    componentDidMount: function () {
      document.getElementById("upload_widget_opener").addEventListener("click", function() {

        cloudinary.openUploadWidget({ cloud_name: 'efreezy', upload_preset: 'stqteojc'},
            function(error, result) {
              console.log(error, result);
              console.log(result[0].secure_url);
    
              this.props.onSubmitPhoto(result[0].secure_url);
            }.bind(this));

        }.bind(this), false);

     },

    render: function () {

      return (
        <div className="upload-img-btn" id="upload_widget_opener">
          Banner Image
        </div>
        );
      }
  });
})(this);
