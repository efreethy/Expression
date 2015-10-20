(function (root) {

  root.TagItem = React.createClass({
    mixins: [ReactRouter.History],

    hclick: function () {
      this.history.pushState(null, 'tags/'+this.props.tag.id);
    },

    render: function () {
      return (
        <div onClick={this.hclick} className="tag-item">
         {this.props.tag.name}
        </div>
      );
    }
  });
})(this);
