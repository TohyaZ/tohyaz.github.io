export function clearLocalStorage() {
  localStorage.clear();
}

export function setItemInLocal(cname, cvalue) {
  if (cname == null) return;
  const listItems = JSON.parse(
    localStorage.getItem(cname) || "[]"
  );
  listItems.push(cvalue);
  localStorage.setItem(cname, JSON.stringify(listItems));
}

export function getItemInLocal(cname) {
  const cvalue = localStorage.getItem(cname);
  return cvalue ? JSON.parse(cvalue) : "";
}


export function setItemsInLocal(cname, cvalue) {
  if (cname == null) return;
  localStorage.setItem(cname, JSON.stringify(cvalue));
}