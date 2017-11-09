import React, { Component } from 'react';

export class AppLinks extends Component {
  render() {
    return (
      <div className="AppLinks">
        <p>
          Welcome to arkcoin.net <br />
          List of services powered by
        </p>
        <table>
          <thead>
            <tr>
              <th>
                Delegate Jarunik
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://www.reddit.com/r/ArkDelegates/wiki/jarunik">delegate proposal</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://discord.gg/m7bt2js">delegate discord chat</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://medium.com/@jarunik">medium blog</a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th>
                Communities
                </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://www.reddit.com/r/ArkEcosystem/"> /r/ArkEcosystem</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.reddit.com/r/ArkDelegates/"> /r/ArkDelegates</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.reddit.com/r/arktrader/"> /r/arktrader</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://arkchat.net">discord chat</a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th>
                Tools
                </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://scan.arkcoin.net/">scan</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://dscan.arkcoin.net/">devnet scan</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://api.arkcoin.net/api/peers/version">mainnet node api</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://dev.arkcoin.net/api/peers/version">devnet node api</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://docs.google.com/spreadsheets/d/1QawUqYa_e9YN_3Stb3-WYTdJ2BgnYqxsErYbA2ihXjo">delegate who is who</a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th>
                <b>Github</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://github.com/Jarunik/arkcoin">arkcoin website</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/Jarunik/ark-media">media collection</a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          <b>Vote delegate jarunik!</b>
        </p>
      </div>
    );
  }
}
