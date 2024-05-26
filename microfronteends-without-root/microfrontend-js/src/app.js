import {registerApplication, start} from "single-spa";

const app = {
    async bootstrap(props){
        console.log("App Started", props);
    },
    async mount(props){
        console.log("App Mounted", props);

        const container = document.getElementById("app-micro-frontend-javascript");
        const button = document.createElement("button");
        button.textContent = `Guardar ${props.name}`;

        container.appendChild(button);
    },
    async unmount(props){
        console.log("App Unmounted", props);

        const container = document.getElementById("app-micro-frontend-javascript");
        container.innerHTML = "";
    }
};

registerApplication({
    name: "app-micro-frontend-javascript",
    app,
    activeWhen: ["/"],
    customProps: {
        code: "001",
        name: "Button Javascript"
    }
});

start();