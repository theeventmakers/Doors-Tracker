"use strict";


const DATA = window.DOORS_DATA || {};


/* =========================
   HELPERS
========================= */

function $(selector) {
  return document.querySelector(selector);
}


function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function safeArray(value) {

  return Array.isArray(value)
    ? value
    : [];

}


function getData() {

  return {

    site: DATA.site || {},
    nextUpdate: DATA.nextUpdate || {},
    status: DATA.status || {},

    floors:
      safeArray(DATA.floors),

    developers:
      safeArray(DATA.developers),

    updates:
      safeArray(DATA.updates),

    minorUpdates:
      safeArray(DATA.minorUpdates),

    messages:
      safeArray(DATA.messages),

    sources:
      safeArray(DATA.sources),

    gameUpdates:
      safeArray(DATA.gameUpdates)

  };

}


function badge(text, className = "") {

  return `
    <span class="badge ${escapeHTML(className)}">
      ${escapeHTML(text)}
    </span>
  `;

}


/* =========================
   OVERVIEW
========================= */

function renderOverview() {

  const page = $("#overview-page");

  if (!page) return;

  const data = getData();

  const next = data.nextUpdate;

  const floors =
    data.floors.slice(0, 3);


  page.innerHTML = `

    <section class="architects">

      <article class="architect architect-revive">

        <div class="fallback-icon fallback-heart">
          ♥
        </div>

        <img
          class="architect-icon"
          src="assets/icons/revive.png"
          alt="Revive"
          onerror="this.style.display='none'"
        >

        <span class="architect-label revive-label">
          REVIVE
        </span>

        <h2>
          A Second Chance
        </h2>

        <p>
          The heart. A symbol of returning after
          a failed run.
        </p>

      </article>


      <article class="architect architect-guiding">

        <div class="fallback-icon fallback-crescent">
          ☾
        </div>

        <img
          class="architect-icon"
          src="assets/icons/guiding-light.png"
          alt="Guiding Light"
          onerror="this.style.display='none'"
        >

        <span class="architect-label guiding-label">
          GUIDING LIGHT
        </span>

        <h2>
          Follow the Light
        </h2>

        <p>
          The blue crescent is one of the most
          recognisable symbols connected with
          Guiding Light.
        </p>

      </article>


      <article class="architect architect-curious">

        <div class="fallback-icon fallback-star">
          ✦
        </div>

        <img
          class="architect-icon"
          src="assets/icons/curious-light.png"
          alt="Curious Light"
          onerror="this.style.display='none'"
        >

        <span class="architect-label curious-label">
          CURIOUS LIGHT
        </span>

        <h2>
          Look Beyond
        </h2>

        <p>
          The star represents Curious Light and
          the strange things waiting beyond the
          obvious path.
        </p>

      </article>

    </section>


    <div style="height:16px"></div>


    <div class="grid grid-2">

      <article
        class="card hero"
        style="
          background-image:
            url('${escapeHTML(
              next.image || ""
            )}');
        "
      >

        <div class="hero-content">

          <span class="eyebrow">
            NEXT UPDATE
          </span>

          <h2>
            ${escapeHTML(
              next.name ||
              "Unknown Update"
            )}
          </h2>

          <p>
            ${escapeHTML(
              next.description ||
              "No description available."
            )}
          </p>

          <div
            id="overview-countdown"
            class="countdown"
          ></div>

          ${badge(
            "Official",
            "official"
          )}

        </div>

      </article>


      <div class="grid">

        <article class="card">

          <span class="eyebrow">
            GAME STATUS
          </span>

          <h2>
            ${escapeHTML(
              data.status.game ||
              "Monitoring"
            )}
          </h2>

          <p class="meta">
            ${escapeHTML(
              data.status.note || ""
            )}
          </p>

        </article>


        <article class="card">

          <span class="eyebrow">
            LATEST TRACKED UPDATE
          </span>

          <h2>
            ${escapeHTML(
              data.updates[0]?.name ||
              "No updates"
            )}
          </h2>

          <p class="meta">
            ${escapeHTML(
              data.updates[0]?.date ||
              "Unknown date"
            )}
          </p>

        </article>

      </div>

    </div>


    <div style="height:16px"></div>


    <div class="grid grid-3">

      ${
        floors.length

          ? floors.map(
              floor => `

                <article
                  class="floor-card"
                  style="
                    background-image:
                      url('${escapeHTML(
                        floor.image || ""
                      )}');
                  "
                >

                  <div class="floor-card-content">

                    <span class="eyebrow">
                      ${escapeHTML(
                        floor.type || ""
                      )}
                    </span>

                    <h3>
                      ${escapeHTML(
                        floor.name ||
                        "Unknown Floor"
                      )}
                    </h3>

                    <p>
                      ${escapeHTML(
                        floor.status || ""
                      )}
                    </p>

                  </div>

                </article>

              `
            ).join("")

          : `
            <article class="card">
              No floors available.
            </article>
          `
      }

    </div>


    <div style="height:16px"></div>


    <article class="card development-credits">

      <span class="eyebrow">
        TRACKER TEAM
      </span>

      <h2>
        Tracker Credits
      </h2>

      <p class="meta">
        People maintaining this fan project.
      </p>

      <div class="credits-grid">

        <div class="credit-person">
          <strong>Logs</strong>
          <span>Developer</span>
        </div>

        <div class="credit-person">
          <strong>Craz</strong>
          <span>Developer</span>
        </div>

      </div>

    </article>

  `;

  updateCountdown();

}


/* =========================
   GAME UPDATES
========================= */

function renderGameUpdates() {

  const page =
    $("#game-updates-page");

  if (!page) return;

  const games =
    getData().gameUpdates;


  page.innerHTML = `

    <div class="grid">

      <article class="card">

        <span class="eyebrow">
          ROBLOX GAME TRACKER
        </span>

        <h2>
          Game Updates
        </h2>

        <p>
          These are the Roblox experiences currently
          being watched by the tracker.
        </p>

      </article>


      ${
        games.length

          ? games.map(
              game => `

                <article class="game-card">

                  <div>

                    <span class="eyebrow">
                      ROBLOX EXPERIENCE
                    </span>

                    <h3>
                      ${escapeHTML(
                        game.name ||
                        "DOORS"
                      )}
                    </h3>

                    <div class="game-id">
                      Place ID:
                      ${escapeHTML(
                        game.placeId ||
                        "Unknown"
                      )}
                    </div>

                    <div class="game-id">
                      Universe ID:
                      ${escapeHTML(
                        game.universeId ||
                        "Unknown"
                      )}
                    </div>


                    <div class="changelog">

                      <div class="changelog-title">
                        MOST RECENT CHANGELOG
                      </div>

                      ${
                        safeArray(
                          game.changelog
                        ).map(
                          change => `
                            <p>
                              ${escapeHTML(
                                change
                              )}
                            </p>
                          `
                        ).join("")
                      }

                    </div>

                    <p class="meta">
                      Last updated:
                      ${escapeHTML(
                        game.lastUpdated ||
                        "Not confirmed"
                      )}
                    </p>

                    <p class="meta">
                      Version:
                      ${escapeHTML(
                        game.latestVersion ||
                        "Not confirmed"
                      )}
                    </p>

                  </div>


                  <div>

                    <div class="game-status">
                      ${escapeHTML(
                        game.status ||
                        "Tracking"
                      )}
                    </div>

                    ${
                      game.url
                        ? `
                          <div
                            style="
                              margin-top:12px;
                              text-align:right;
                            "
                          >
                            <a
                              href="${escapeHTML(
                                game.url
                              )}"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Roblox ↗
                            </a>
                          </div>
                        `
                        : ""
                    }

                  </div>

                </article>

              `
            ).join("")

          : `
            <article class="card">
              No Roblox experiences are being tracked.
            </article>
          `
      }


      <article class="card">

        <span class="eyebrow">
          TRACKING NOTE
        </span>

        <div class="notice">

          Roblox game update history is not treated as
          confirmed until the tracker receives reliable
          information from a suitable source.

          <br><br>

          This prevents the tracker from displaying
          made-up version numbers or changelogs.

        </div>

      </article>

    </div>

  `;

}


/* =========================
   UPDATES
========================= */

function renderUpdates() {

  const page =
    $("#updates-page");

  if (!page) return;

  const updates =
    getData().updates;


  page.innerHTML = `

    <div class="card">

      <span class="eyebrow">
        UPDATE ARCHIVE
      </span>

      <h2>
        Updates
      </h2>

      <div class="list">

        ${
          updates.length

            ? updates.map(
                update => `

                  <article class="list-item">

                    <div
                      style="
                        display:flex;
                        gap:15px;
                        align-items:center;
                      "
                    >

                      ${
                        update.image
                          ? `
                            <img
                              src="${escapeHTML(
                                update.image
                              )}"
                              alt=""
                              style="
                                width:85px;
                                height:58px;
                                object-fit:cover;
                                flex-shrink:0;
                              "
                            >
                          `
                          : ""
                      }

                      <div>

                        <strong>
                          ${escapeHTML(
                            update.name ||
                            "Unknown Update"
                          )}
                        </strong>

                        <div class="meta">

                          ${escapeHTML(
                            update.date ||
                            "Unknown date"
                          )}

                          ·

                          ${escapeHTML(
                            update.type ||
                            "Update"
                          )}

                          ${badge(
                            update.confidence ||
                            "Unknown",
                            update.confidence ===
                              "Official"
                              ? "official"
                              : ""
                          )}

                        </div>

                      </div>

                    </div>

                  </article>

                `
              ).join("")

            : `
              <article class="list-item">
                No updates available.
              </article>
            `
        }

      </div>

    </div>

  `;

}


/* =========================
   MINOR UPDATES
========================= */

function renderMinorUpdates() {

  const page =
    $("#minor-updates-page");

  if (!page) return;

  const updates =
    getData().minorUpdates;


  page.innerHTML = `

    <div class="card">

      <span class="eyebrow">
        MINOR UPDATE ARCHIVE
      </span>

      <h2>
        Minor Updates
      </h2>

      <p class="meta">
        Smaller changes, fixes and maintenance.
      </p>

      <div class="list">

        ${
          updates.length

            ? updates.map(
                update => `

                  <article class="list-item">

                    <strong>
                      ${escapeHTML(
                        update.name ||
                        "Minor Update"
                      )}
                    </strong>

                    <div class="meta">

                      ${escapeHTML(
                        update.date ||
                        "Unknown date"
                      )}

                      ${
                        update.type
                          ? ` · ${escapeHTML(
                              update.type
                            )}`
                          : ""
                      }

                    </div>

                    ${
                      update.description
                        ? `
                          <p>
                            ${escapeHTML(
                              update.description
                            )}
                          </p>
                        `
                        : ""
                    }

                  </article>

                `
              ).join("")

            : `
              <article class="list-item">
                No minor updates recorded.
              </article>
            `
        }

      </div>

    </div>

  `;

}


/* =========================
   DEV MESSAGES
========================= */

function renderMessages() {

  const page =
    $("#dev-messages-page");

  if (!page) return;

  const messages =
    getData().messages;


  page.innerHTML = `

    <div class="card">

      <span class="eyebrow">
        PUBLIC DEVELOPMENT ACTIVITY
      </span>

      <h2>
        Dev Messages
      </h2>

      <div class="list">

        ${
          messages.length

            ? messages.map(
                message => `

                  <article class="list-item">

                    <div class="dev">

                      ${
                        message.image
                          ? `
                            <img
                              class="dev-avatar"
                              src="${escapeHTML(
                                message.image
                              )}"
                              alt=""
                            >
                          `
                          : ""
                      }

                      <div>

                        <strong>

                          ${escapeHTML(
                            message.author ||
                            "Unknown"
                          )}

                          ${badge(
                            message.confidence ||
                            "Unverified",
                            message.confidence ===
                              "Official"
                              ? "official"
                              : ""
                          )}

                        </strong>

                        <div class="meta">

                          ${escapeHTML(
                            message.handle ||
                            ""
                          )}

                          ${
                            message.date
                              ? ` · ${escapeHTML(
                                  message.date
                                )}`
                              : ""
                          }

                        </div>

                        <p class="quote">
                          ${escapeHTML(
                            message.message ||
                            ""
                          )}
                        </p>

                        ${
                          message.link
                            ? `
                              <a
                                href="${escapeHTML(
                                  message.link
                                )}"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View source ↗
                              </a>
                            `
                            : ""
                        }

                      </div>

                    </div>

                  </article>

                `
              ).join("")

            : `
              <article class="list-item">
                No developer messages available.
              </article>
            `
        }

      </div>

    </div>

  `;

}


/* =========================
   DEVELOPMENT
========================= */

function renderDevelopment() {

  const page =
    $("#development-page");

  if (!page) return;

  const developers =
    getData().developers;


  page.innerHTML = `

    <div class="grid grid-2">

      <article class="card">

        <span class="eyebrow">
          DEVELOPMENT
        </span>

        <h2>
          Developers
        </h2>

        <div class="list">

          ${
            developers.map(
              dev => `

                <article class="list-item">

                  <div class="dev">

                    ${
                      dev.image
                        ? `
                          <img
                            class="dev-avatar"
                            src="${escapeHTML(
                              dev.image
                            )}"
                            alt=""
                          >
                        `
                        : ""
                    }

                    <div>

                      <strong>
                        ${escapeHTML(
                          dev.displayName ||
                          dev.name ||
                          "Developer"
                        )}
                      </strong>

                      <div class="meta">
                        ${escapeHTML(
                          dev.name ||
                          ""
                        )}
                      </div>

                      <p>
                        ${escapeHTML(
                          dev.role ||
                          ""
                        )}
                      </p>

                      ${
                        dev.profile
                          ? `
                            <a
                              href="${escapeHTML(
                                dev.profile
                              )}"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Public profile ↗
                            </a>
                          `
                          : ""
                      }

                    </div>

                  </div>

                </article>

              `
            ).join("")
          }

        </div>

      </article>


      <article class="card">

        <span class="eyebrow">
          TRACKER POLICY
        </span>

        <h2>
          Evidence First
        </h2>

        <div class="notice">

          Official Roblox and developer information
          is given the highest confidence.

          <br><br>

          Secondary sources are used as supporting
          information.

          <br><br>

          Rumours and theories are not presented as
          confirmed facts.

        </div>

      </article>

    </div>

  `;

}


/* =========================
   STATUS
========================= */

function renderStatus() {

  const page =
    $("#status-page");

  if (!page) return;

  const data =
    getData();


  page.innerHTML = `

    <div class="grid grid-2">

      <article class="card">

        <span class="eyebrow">
          TRACKER STATUS
        </span>

        <h2>
          ${escapeHTML(
            data.status.game ||
            "Monitoring"
          )}
        </h2>

        <p class="meta">
          ${escapeHTML(
            data.status.note ||
            ""
          )}
        </p>

        <hr
          style="
            border:0;
            border-top:1px solid var(--line);
            margin:20px 0;
          "
        >

        <strong>
          Archives
        </strong>

        <p>
          ${escapeHTML(
            data.status.archives ||
            "Unknown"
          )}
        </p>

      </article>


      <article class="card">

        <span class="eyebrow">
          NEXT UPDATE
        </span>

        <h2>
          ${escapeHTML(
            data.nextUpdate.name ||
            "Unknown"
          )}
        </h2>

        <div
          id="status-countdown"
          class="countdown"
        ></div>

      </article>

    </div>

  `;

  updateCountdown();

}


/* =========================
   FLOORS
========================= */

function renderFloors() {

  const page =
    $("#floors-page");

  if (!page) return;

  const floors =
    getData().floors;


  page.innerHTML = `

    <div class="card">

      <span class="eyebrow">
        FLOORS & SUBFLOORS
      </span>

      <h2>
        DOORS Locations
      </h2>

      <div class="grid grid-3">

        ${
          floors.map(
            floor => `

              <article
                class="floor-card"
                style="
                  background-image:
                    url('${escapeHTML(
                      floor.image ||
                      ""
                    )}');
                "
              >

                <div class="floor-card-content">

                  <span class="eyebrow">
                    ${escapeHTML(
                      floor.type ||
                      ""
                    )}
                  </span>

                  <h3>
                    ${escapeHTML(
                      floor.name ||
                      "Unknown Floor"
                    )}
                  </h3>

                  <p>
                    ${escapeHTML(
                      floor.status ||
                      ""
                    )}
                  </p>

                </div>

              </article>

            `
          ).join("")
        }

      </div>

    </div>

  `;

}


/* =========================
   SOURCES
========================= */

function renderSources() {

  const page =
    $("#sources-page");

  if (!page) return;

  const sources =
    getData().sources;


  page.innerHTML = `

    <div class="card">

      <span class="eyebrow">
        RESEARCH
      </span>

      <h2>
        Sources
      </h2>

      <div class="list">

        ${
          sources.map(
            source => `

              <article class="list-item">

                <strong>
                  ${escapeHTML(
                    source.name ||
                    "Source"
                  )}
                </strong>

                <div class="meta">

                  ${badge(
                    source.type ||
                    "Unknown",
                    source.type ===
                      "Official"
                      ? "official"
                      : ""
                  )}

                </div>

                ${
                  source.url
                    ? `
                      <div
                        style="
                          margin-top:10px;
                        "
                      >

                        <a
                          href="${escapeHTML(
                            source.url
                          )}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open source ↗
                        </a>

                      </div>
                    `
                    : ""
                }

              </article>

            `
          ).join("")
        }

      </div>

    </div>

  `;

}


/* =========================
   COUNTDOWN
========================= */

function updateCountdown() {

  const data =
    getData();

  const date =
    data.nextUpdate.date;

  if (!date) return;


  const target =
    new Date(date).getTime();

  if (Number.isNaN(target)) return;


  let difference =
    target - Date.now();

  const released =
    difference <= 0;


  if (difference < 0) {
    difference = 0;
  }


  const days =
    Math.floor(
      difference / 86400000
    );

  const hours =
    Math.floor(
      (difference % 86400000) /
      3600000
    );

  const minutes =
    Math.floor(
      (difference % 3600000) /
      60000
    );

  const seconds =
    Math.floor(
      (difference % 60000) /
      1000
    );


  const html = released

    ? `
      <div class="time-box">
        <strong>LIVE</strong>
        <span>RELEASED</span>
      </div>
    `

    : `

      <div class="time-box">
        <strong>
          ${String(days).padStart(2,"0")}
        </strong>
        <span>DAYS</span>
      </div>

      <div class="time-box">
        <strong>
          ${String(hours).padStart(2,"0")}
        </strong>
        <span>HOURS</span>
      </div>

      <div class="time-box">
        <strong>
          ${String(minutes).padStart(2,"0")}
        </strong>
        <span>MINUTES</span>
      </div>

      <div class="time-box">
        <strong>
          ${String(seconds).padStart(2,"0")}
        </strong>
        <span>SECONDS</span>
      </div>

    `;


  const overview =
    $("#overview-countdown");

  const status =
    $("#status-countdown");


  if (overview) {
    overview.innerHTML =
      html;
  }

  if (status) {
    status.innerHTML =
      html;
  }


  const trackerStatus =
    $("#tracker-status");

  if (trackerStatus) {

    trackerStatus.textContent =
      released
        ? "Release day"
        : "Monitoring";

  }

}


/* =========================
   NAVIGATION
========================= */

function setupNavigation() {

  const buttons =
    document.querySelectorAll(
      ".nav-item[data-page]"
    );

  const pages =
    document.querySelectorAll(
      ".page"
    );


  const titles = {

    overview: [
      "DOORS Tracker",
      "Development, updates, game versions and more."
    ],

    "game-updates": [
      "Game Updates",
      "Roblox experiences currently being tracked."
    ],

    updates: [
      "Updates",
      "DOORS update history and upcoming releases."
    ],

    "minor-updates": [
      "Minor Updates",
      "Smaller changes, fixes and maintenance."
    ],

    "dev-messages": [
      "Dev Messages",
      "Public developer activity and announcements."
    ],

    development: [
      "Development",
      "Developer credits and development tracking."
    ],

    status: [
      "Status",
      "Tracker and release status."
    ],

    floors: [
      "Floors & Subfloors",
      "Explore the DOORS floor structure."
    ],

    sources: [
      "Sources",
      "Official and secondary research sources."
    ]

  };


  function activatePage(
    pageName
  ) {

    const target =
      document.getElementById(
        `${pageName}-page`
      );

    if (!target) return;


    pages.forEach(
      page => {
        page.classList.remove(
          "active"
        );
      }
    );


    target.classList.add(
      "active"
    );


    buttons.forEach(
      button => {

        const active =
          button.dataset.page ===
          pageName;

        button.classList.toggle(
          "active",
          active
        );

        if (active) {

          button.setAttribute(
            "aria-current",
            "page"
          );

        } else {

          button.removeAttribute(
            "aria-current"
          );

        }

      }
    );


    const titleData =
      titles[pageName];


    if (titleData) {

      const title =
        $("#page-title");

      const description =
        $("#page-description");


      if (title) {
        title.textContent =
          titleData[0];
      }


      if (description) {
        description.textContent =
          titleData[1];
      }

    }


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  buttons.forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          activatePage(
            button.dataset.page
          );

        }
      );

    }
  );

}


/* =========================
   INIT
========================= */

function init() {

  if (
    !window.DOORS_DATA ||
    typeof window.DOORS_DATA !==
      "object"
  ) {

    const app =
      $("#app");

    if (app) {

      app.innerHTML = `

        <section class="card">

          <h2>
            Tracker data could not be loaded.
          </h2>

          <p>
            Make sure data.js is in the same
            folder as index.html and app.js.
          </p>

        </section>

      `;

    }

    return;

  }


  renderOverview();

  renderGameUpdates();

  renderUpdates();

  renderMinorUpdates();

  renderMessages();

  renderDevelopment();

  renderStatus();

  renderFloors();

  renderSources();

  setupNavigation();

  updateCountdown();


  const lastUpdated =
    $("#last-updated");


  if (lastUpdated) {

    lastUpdated.textContent =
      `Data snapshot: ${
        getData().site.lastChecked ||
        "Unknown"
      }`;

  }


  setInterval(
    updateCountdown,
    1000
  );

}


/* =========================
   START
========================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}