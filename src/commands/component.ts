import {Command, Flags} from '@oclif/core'
import * as fs from 'fs-extra'
import {isPascalCase} from '../helpers'

export default class Component extends Command {
  static description = 'Scaffold a React component';

  // static examples = ['<%= config.bin %> <%= command.id %> '];

  static flags = {
    dest: Flags.string({char: 'd', description: 'Destination folder', required: false, default: 'src/components'}),
    typescript: Flags.boolean({description: 'Create a TypeScript component', required: false}),
  };

  static args = [{name: 'componentName'}];

  private async createComponent(config: {
    componentName: string,
    destination: string,
    isTypescript?: boolean
  }): Promise<void> {
    const {componentName, destination, isTypescript} = config

    const jsContent =
`export default function ${componentName}() {
  return <div>${componentName}</div>
}`

    const cssContent =
`.${componentName} {

}`
    const ext = isTypescript ? 'ts' : 'js'
    await fs.mkdirp(`${destination}/${componentName}`)
    await fs.writeFile(`${destination}/${componentName}/${componentName}.${ext}`, jsContent)
    await fs.writeFile(`${destination}/${componentName}/${componentName}.css`, cssContent)

    this.log(`✅ Created ${componentName} at ${destination}/${componentName}`)
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Component)

    if (!args.componentName) {
      this.log('Missing Argument: <ComponentName>')
      return
    }

    if (!isPascalCase(args.componentName)) {
      this.log(`Invalid Argument: ${args.componentName} must be in PascalCase`)
      return
    }

    await this.createComponent({
      componentName: args.componentName,
      destination: flags.dest || 'src/components',
      isTypescript: flags.typescript,
    })
  }
}
