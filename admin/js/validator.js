let checkEmpty = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入内容"));
  } else {
    callback();
  }
};

let checkNumber = (rule, value, callback) => {
  if (isNaN(value)) {
    callback(new Error("请输入数字"));
  } else {
    callback();
  }
};

let checkYear = (rule, value, callback) => {
  let year = new Date().getUTCFullYear();
  if (isNaN(value)) {
    callback(new Error("请输入数字"));
  } else if (value.length !== 4) {
    callback(new Error("年份应位4位数字"));
  } else if (Number(value) > year) {
    callback(new Error("不能大于今年"));
  } else {
    callback();
  }
};

let checkExistence = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("没有则填上无"));
  } else {
    callback();
  }
};

let checkLength = (rule, value, callback) => {
  if (rule.field === "enterpriseNature" && value.length === 0) {
    callback(new Error("请至少选择一个企业性质"));
  }
  callback();
};

let checkCascader = (rule, value, callback) => {
  if (rule.field == "ascription" && value === "") {
    callback(new Error("请选择行业归属"));
  }
  if (rule.field == "address" && value === "") {
    callback(new Error("请选择地址"));
  }
  callback();
};

let checkPhoneNumber = (rule, value, callback) => {
  if (value === "无") {
    callback();
  }
  if (!/^0?1[3|4|5|6|7|8][0-9]\d{8}$/.test(value)) {
    callback(new Error("电话号码格式不正确"));
  } else {
    callback();
  }
};
