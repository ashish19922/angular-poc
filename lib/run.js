import { Server, Probot } from "probot";
import app from './app.js';
async function startServer() {
    const server = new Server({
        Probot: Probot.defaults({
            appId: '893549',
            secret: 'development',
            privateKey: "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAt6YSzlxHO8CDgdzr0aXgUPav5zNMU8XlJ7BozClCb84FxjxW\nARxNTAyMhy0WkC/MycRu9uFlbDStj24DGkYAexYWDMRhVN21UwoBI+u0bLSCMGmM\n4eSTVWf7KD53N818jpCFiZtSqJa2jsDcLh12Q9tum3reXSbBupQGR8EH0DFOm12N\ndkEH8f3aPein7aN9q91kdXVLzHFf1HRxGZMmkdeDZwwsaIB8dnS8jhLkPbI2k8PB\n+VYtC3E0yocdI7ZeQZVU613cBIGg+OLsmpaIKi37wT9/xlVyCqR5FxH7E0wvsCeA\nn2SHXHpFicfUisqHnGsRYpdZ2CLflJmRAc7PWwIDAQABAoIBAEyP5eM2QVQ9zBWF\nvqJmXwAh9++RSU7bf89uEiKbSOFHqMyeNtS7sdX0nVl1iKSP6PZs+D3gdeIIjBrx\nqEV5zZWC/apQ7KruyztVPmh1SYDQOD5qoptCKdI/SUvbzuPqvPTKd4GIyYsTWgRl\njuWCzt03TANx0+ZN1BIux/d+F/3I+2o34k9Xyvfg/zvwf9w5xIfz+miY4auUmi/J\nOJ7XPFY83YX+GXXEqvVc5NFLimwblFIOHdmqRNbehkPu285fiMRM+K919AP3RRTH\nkYMTdSwPrWb2AGQC3XYqlvxAULe6VvfoiWajQxapIN6Y4M3xbLUMpp9mKZ4lxaaA\n2d4n0oECgYEA52MjgLgflLG21HKs12Z1BC5ZhB6N6cSZfD3D0ntJXwJOl7Db6VLK\n1BCcj5+35bhpNFZSq4+7UMB7KHTUANo7p4wzsUoUVdYytn94VQseyu/CNJngmjk4\nsEUQ5MPiQEvQCxS8qk16ET/2WekM90XzUHI7DKjHJaTVLiaZhqiKYXsCgYEAyy75\n3LOxGqdmrpJTCN7xJuOoxV4zPOJ5aCEa8Y8EUetPPi0TRvcRwWostSWFZ4CjRdYz\nrd31DIR/TeGUTiQoD9qQH2GpI0seFvrma3XcSvpmJHOgkN4OG4r/E7VBtd58stss\ndb6UcyHt0lUGWkDnO01BUW0RWf656luOSc9UM6ECgYAcY8ySWYT+cIOXM27Div2m\ngq1XCYyt9wJB/S4OoDPTZWwRLpD84ryiIlujP5yHogW+dyzzgdIgyU0THKp6ZExX\ndVtOUGGIWpykSaWRAalIivxQCeVF5ulurzqwZtxWuTaQdX3kg1cL0MZAJ9kAaeO9\nphZaqkas9rl1TSUfIYTBCwKBgGrGHPgmVgOzxPooWwpmXkQZjy9o+XQdb7+Q5h/b\nEGIcTmBWP7MjU2lY6nWnahuiNisVDcNoyMXzOxMqYE1QIt1x9hsHr2KkrwNUhpIi\nNcoRHGw7dz2p86/1s2Yf8pAog09ablrR9CEsy1Wk6Nm1Ec7QImsv7dZlTj4iLvwK\nwC0BAoGAOnQzutOGmeeeW2DsCqxO9jaM2H/t7H8Ib7layf4A7mXyZUE0N3rt9WVN\nD3UkyV2dAOX2hlOPtl8A/MK/py+ra0TIKwOiUkavqrCUKppQx4yhN7KUkE6J+8bi\nSMgLrAGMHXesYJssYct+6ePcDHFrFanRpxPNUFDxxYVtQFCD/Ws=\n-----END RSA PRIVATE KEY-----\n"
        }),
        hostname: 'localhost',
        port: 3000,
        webhookProxy: 'https://smee.io/lDq29UmbykV1GrK'
    })
    await server.load(app);
    server.start();
}


startServer();