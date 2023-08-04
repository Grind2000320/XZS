module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1690942725503, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
  name: 'vant-icon',
  basic: [
    'arrow',
    'arrow-left',
    'arrow-up',
    'arrow-down',
    'success',
    'cross',
    'plus',
    'minus',
    'fail',
    'circle',
  ],
  outline: [
    // has corresponding filled icon
    'location-o',
    'like-o',
    'star-o',
    'phone-o',
    'setting-o',
    'fire-o',
    'coupon-o',
    'cart-o',
    'shopping-cart-o',
    'cart-circle-o',
    'friends-o',
    'comment-o',
    'gem-o',
    'gift-o',
    'point-gift-o',
    'send-gift-o',
    'service-o',
    'bag-o',
    'todo-list-o',
    'balance-list-o',
    'close',
    'clock-o',
    'question-o',
    'passed',
    'add-o',
    'gold-coin-o',
    'info-o',
    'play-circle-o',
    'pause-circle-o',
    'stop-circle-o',
    'warning-o',
    'phone-circle-o',
    'music-o',
    'smile-o',
    'thumb-circle-o',
    'comment-circle-o',
    'browsing-history-o',
    'underway-o',
    'more-o',
    'video-o',
    'shop-o',
    'shop-collect-o',
    'share-o',
    'chat-o',
    'smile-comment-o',
    'vip-card-o',
    'award-o',
    'diamond-o',
    'volume-o',
    'cluster-o',
    'wap-home-o',
    'photo-o',
    'gift-card-o',
    'expand-o',
    'medal-o',
    'good-job-o',
    'manager-o',
    'label-o',
    'bookmark-o',
    'bill-o',
    'hot-o',
    'hot-sale-o',
    'new-o',
    'new-arrival-o',
    'goods-collect-o',
    'eye-o',
    'delete-o',
    'font-o',
    // without corresponding filled icon
    'balance-o',
    'refund-o',
    'birthday-cake-o',
    'user-o',
    'orders-o',
    'tv-o',
    'envelop-o',
    'flag-o',
    'flower-o',
    'filter-o',
    'bar-chart-o',
    'chart-trending-o',
    'brush-o',
    'bullhorn-o',
    'hotel-o',
    'cashier-o',
    'newspaper-o',
    'warn-o',
    'notes-o',
    'calendar-o',
    'bulb-o',
    'user-circle-o',
    'desktop-o',
    'apps-o',
    'home-o',
    'back-top',
    'search',
    'points',
    'edit',
    'qr',
    'qr-invalid',
    'closed-eye',
    'down',
    'scan',
    'revoke',
    'free-postage',
    'certificate',
    'logistics',
    'contact',
    'cash-back-record',
    'after-sale',
    'exchange',
    'upgrade',
    'ellipsis',
    'description',
    'records',
    'sign',
    'completed',
    'failure',
    'ecard-pay',
    'peer-pay',
    'balance-pay',
    'credit-pay',
    'debit-pay',
    'cash-on-deliver',
    'other-pay',
    'tosend',
    'pending-payment',
    'paid',
    'aim',
    'discount',
    'idcard',
    'replay',
    'shrink',
    'shield-o',
    'guide-o',
    'cash-o',
    'link-o',
    'miniprogram-o',
  ],
  filled: [
    // has corresponding outline icon
    'location',
    'like',
    'star',
    'phone',
    'setting',
    'fire',
    'coupon',
    'cart',
    'shopping-cart',
    'cart-circle',
    'friends',
    'comment',
    'gem',
    'gift',
    'point-gift',
    'send-gift',
    'service',
    'bag',
    'todo-list',
    'balance-list',
    'clear',
    'clock',
    'question',
    'checked',
    'add',
    'gold-coin',
    'info',
    'play-circle',
    'pause-circle',
    'stop-circle',
    'warning',
    'phone-circle',
    'music',
    'smile',
    'thumb-circle',
    'comment-circle',
    'browsing-history',
    'underway',
    'more',
    'video',
    'shop',
    'shop-collect',
    'share',
    'chat',
    'smile-comment',
    'vip-card',
    'award',
    'diamond',
    'volume',
    'cluster',
    'wap-home',
    'photo',
    'gift-card',
    'expand',
    'medal',
    'good-job',
    'manager',
    'label',
    'bookmark',
    'bill',
    'hot',
    'hot-sale',
    'new',
    'new-arrival',
    'goods-collect',
    'eye',
    'delete',
    'font',
    // without corresponding outline icon
    'wechat',
    'wechat-pay',
    'wechat-moments',
    'qq',
    'alipay',
    'weibo',
    'photograph',
    'youzan-shield',
    'umbrella-circle',
    'bell',
    'printer',
    'map-marked',
    'card',
    'add-square',
    'live',
    'lock',
    'audio',
    'graphic',
    'column',
    'invitation',
    'play',
    'pause',
    'stop',
    'weapp-nav',
    'ascending',
    'descending',
    'bars',
    'wap-nav',
    'enlarge',
    'photo-fail',
    'sort',
  ],
};

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1690942725503);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map