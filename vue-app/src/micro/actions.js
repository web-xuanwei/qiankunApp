function emptyAction() {
    console.warn('Current excute action is empty');
}

class Actions {

    actions = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction
    }

    setActions(actoins) {
        this.actions = actoins;
    }

    onGlobalStateChange(...args) {
        return this.actions.onGlobalStateChange(...args);
    }

    setGlobalState(...args) {
        return this.actions.setGlobalState(...args);
    }

}

const actions = new Actions();
export default actions;