define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dijit/_WidgetBase",
    "dijit/form/Button",
    "dijit/form/TextBox"
], function(
    declare,
    domConstruct,
    _WidgetBase,
    Button,
    TextBox
) {
    return declare([_WidgetBase], {
        onChange: function (e) {
            return true;
        },
        buildRendering: function () {
            this.domNode = domConstruct.create("div");
            var table = domConstruct.create("table", {
                style: {
                    border: "1px solid #9f9f9f"
                },
                cellSpacing: 10
            }, this.domNode);
            var tr = domConstruct.create("tr", null, table);
            var td = domConstruct.create("td", null, tr);
            var label = domConstruct.create("label", {
                for: this.id + "Name",
                innerHTML: "Name:"
            }, td);
            tr = domConstruct.create("tr", null, table);
            td = domConstruct.create("td", null, tr);
            this.nameInput = new TextBox({
                id: this.id + "Name",
                type: "text",
                name: "name",
                trim: "true",
                properCase: true
            }).placeAt(td);
            this.own(this.nameInput);

            tr = domConstruct.create("tr", null, table);
            domConstruct.create("td", null, tr);
            tr = domConstruct.create("tr", null, table);
            td = domConstruct.create("td", null, tr);
            this.own(new Button({
                label: "Greet",
                onClick: function (e) {
                    this.onChange(this.nameInput.get("value"));
                }.bind(this)
            }).placeAt(td));
        }
    });
});
