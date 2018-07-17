import Vue from 'vue'
const isServer = Vue.prototype.$isServer
// 判断参数是否是其中之一
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

// watch DOM change
export const MutationObserver = isServer ? false : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false
// firstUpperCase
function firstUpperCase (str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1)
}
export {
  firstUpperCase
}

// Warn
export function warnProp (component, prop, correctType, wrongType) {
  correctType = firstUpperCase(correctType)
  wrongType = firstUpperCase(wrongType)
  console.error(`[iView warn]: Invalid prop: type check failed for prop ${prop}. Expected ${correctType}, got ${wrongType}. (found in component: ${component})`) // eslint-disable-line
}

function typeOf (obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

// deepCopy
function deepCopy (data) {
  const t = typeOf(data)
  let o
  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

export {
  deepCopy
}

// Find components upward
export function findComponentUpward (context, componentName) {
  if (typeof componentName === 'string') {
    componentName = [componentName]
  }
  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentName.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

// Find component downward
export function findComponentDownward (context, componentName) {
  const childrens = context.$children
  let children = null

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}

// Find components downward
export function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

// Find components upward
export function findComponentsUpward (context, componentName) {
  let parents = []
  if (context.$parent) {
    if (context.$parent.$options.name === componentName) parents.push(context.$parent)
    return parents.concat(findComponentsUpward(context.$parent, componentName))
  } else {
    return []
  }
}

// Find brothers components
export function findBrothersComponents (context, componentName) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.indexOf(context)
  res.splice(index, 1)
  return res
}
