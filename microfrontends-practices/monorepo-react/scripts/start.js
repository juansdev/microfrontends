const {spawn} = require("node:child_process");
const prompts = require('prompts');
prompts.override(require('yargs').argv);

const apps = {
    clients: 9001,
    bills: 9002,
    menu: 9003,
    products: 9004
};

(async () => {
    const {applicationsSelected} = await prompts([
        {
            type: 'multiselect',
            name: 'applicationsSelected',
            message: 'Select the application(s) to deploy',
            instructions: false,
            choices: Object.entries(apps).map(([appName, numberPort])=>({
                title: `${appName} (Port: ${numberPort})`,
                value: appName
            })),
            hint: '- Space to select. Return to submit'
        }
    ]);
    if(!Array.isArray(applicationsSelected) || !applicationsSelected.length){
        console.log("You must selected one application");
        process.exit();
    }
    const startProcess = spawn(
        /^win/.test(process.platform) ? 'lerna.cmd':'lerna',
        [
            'run',
            'start',
            '--scope',
            `*/{root-config,styleguide,${applicationsSelected.join(",")}}`,
            '--stream',
            '--parallel'
        ],
        {
            stdio: "inherit",
            env: {
                ...process.env,
                FEATURE_APP_DATA: JSON.stringify(
                    applicationsSelected.reduce((result, appName)=>{
                        result[appName] = apps[appName];
                        return result;
                    }, {})
                )
            }
        }
    );
})();