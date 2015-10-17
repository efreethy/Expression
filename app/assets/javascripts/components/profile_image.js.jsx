(function (root) {

  root.ProfileImage = React.createClass({
    getInitialState: function () {
      return {width: this.props.width || 100, height: this.props.width  || 100};
    },

    componentWillMount: function () {
      $.cloudinary.config({ cloud_name: "efreezy", api_key: "143452987158649"});
    },


    constructSrc: function (url) {

      if (typeof url !== "undefined") {
        var slicedUrl = url.slice(url.indexOf('upload/')+7);
        var lastIdx = slicedUrl.indexOf('/');
        var trailingUrl = slicedUrl.slice(lastIdx + 1);
  
        imageTag = $.cloudinary.image(trailingUrl, { width: this.state.width, height: this.state.height, crop: 'thumb', radius: 'max'})[0];
        return imageTag.src;
      }
    },

    render: function () {

        return (<img className={this.props.classProp || ""} src={this.constructSrc(this.props.imageUrl)}/>);

    }
  });
})(this);
