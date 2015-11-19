var MAGIC_ID = '__react_highlighter_plugin_stylesheet__';
var style = document.getElementById('__react_highlighter_plugin_stylesheet__');

if (style) {
    document.head.removeChild(document.getElementById(MAGIC_ID));
} else {
    style = document.createElement('style');
    style.setAttribute('id', MAGIC_ID);
    document.head.appendChild(style);

    var widgetIdList = document.querySelector('#markoWidgets');
    var dataIds = widgetIdList.getAttribute('data-ids') || '';
    var parentId = dataIds.match("[^,]+$");

    //dataIds = dataIds.split(',').map(function (el) { return '[id="' + el + '"]'; }).join();

    style.sheet.insertRule(
        '[id^="' + parentId + '"] { \
        color: #000 !important; \
        background-color: rgba(60, 181,236 , 0.4) !important; \
        outline: dotted 1px firebrick !important; \
    }',
        0
    );

    // Maybe in the future...
    // style.sheet.insertRule(
    //     '[id^="' + parentId + '"]:before { \
    //         background-color: rgba(225, 43, 39, 0.78) !important; \
    //         position: absolute; \
    //         height: 10px; \
    //         width: auto; \
    //         content: attr(id); \
    //         padding: 0 2px; \
    //         line-height: 10px; \
    //         color: #f7f7f7 !important; \
    //         font-size: 8px; \
    // }',
    //     1
    // );

}
