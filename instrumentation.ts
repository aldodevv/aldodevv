export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // await import('./instrumentation-node')
    console.log('Instrumentation registered (Node.js)')
  }
 
  if (process.env.NEXT_RUNTIME === 'edge') {
    // await import('./instrumentation-edge')
    console.log('Instrumentation registered (Edge)')
  }
}
