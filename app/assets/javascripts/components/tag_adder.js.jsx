(function (root) {

  root.TagAdder = React.createClass({

    componentDidMount: function () {
      $('#tag-adder').tokenize({
        placeholder: "Add some Tags"
      });

    },

    render: function () {
      return (
              <select id="tag-adder">
              </select>
            );
    }
  });
})(this);
