(function () {
  "use strict";

  function render(state, h, role) {
    const conversations = state.conversations.filter((item) => item.roles.includes(role));
    if (!conversations.length) return '<div class="empty">Keine Unterhaltungen vorhanden.</div>';
    let activeId = state.activeConversations[role];
    if (!conversations.some((item) => item.id === activeId)) activeId = conversations[0].id;
    state.activeConversations[role] = activeId;
    const active = conversations.find((item) => item.id === activeId);
    markRead(active, role);
    return `<section aria-labelledby="conversation-title-${role}">
      <div class="section-heading"><div><p class="eyebrow">Sicher kommunizieren</p><h2 id="conversation-title-${role}">Gesprächsverläufe</h2></div><span class="badge badge-info">Vor Buchung anonym</span></div>
      <div class="conversation-layout">
        <div class="conversation-list" aria-label="Unterhaltungen">${conversations.map((item) => {
          const unread = unreadCount(item, role);
          return `<button class="conversation-item ${item.id === activeId ? "active" : ""}" type="button" data-conversation-id="${item.id}"><div class="split"><strong>${h(item.title)}</strong>${unread ? `<span class="unread-dot" aria-label="${unread} ungelesene Nachrichten">${unread}</span>` : ""}</div><span class="hint">${h(item.typeLabel)} · ${h(item.contextId)}</span></button>`;
        }).join("")}</div>
        <article class="card conversation-detail">
          <header class="conversation-head"><p class="eyebrow">${h(active.typeLabel)}</p><h3>${h(active.title)}</h3><p class="small muted">Beteiligte: ${h(participantLabels(active, role).join(", "))}</p></header>
          <div class="message-thread" aria-live="polite">${active.messages.map((message) => `<div class="message-bubble ${message.senderRole === role ? "own" : ""}"><p>${h(message.text)}</p><div class="message-meta">${h(message.sender)} · <time>${new Date(message.createdAt).toLocaleString("de-DE")}</time>${message.senderRole === role && message.readBy.some((reader) => reader !== role) ? " · Gelesen" : ""}</div></div>`).join("")}</div>
          <form class="form-grid message-composer" data-thread-message-form data-conversation-id="${active.id}" data-sender-role="${role}"><div class="field"><label for="thread-message-${role}">Nachricht</label><textarea id="thread-message-${role}" name="text" required maxlength="800" placeholder="Nachricht schreiben …"></textarea><span class="hint">Kontaktdaten bleiben vor der Buchung verdeckt.</span></div><button class="button button-primary" type="submit">Nachricht senden</button></form>
        </article>
      </div>
    </section>`;
  }

  function submit(state, form, notify) {
    const conversation = state.conversations.find((item) => item.id === form.dataset.conversationId);
    if (!conversation) return false;
    const control = form.elements.namedItem("text");
    const text = String(control.value).trim();
    if (!text) {
      control.setCustomValidity("Bitte geben Sie eine Nachricht ein."); control.reportValidity();
      control.addEventListener("input", () => control.setCustomValidity(""), { once: true }); return false;
    }
    const role = form.dataset.senderRole;
    conversation.messages.push({ id: `MSG-${state.nextIds.message++}`, senderRole: role, sender: state.roleLabels[role], text, createdAt: new Date().toISOString(), readBy: [role] });
    conversation.roles.filter((item) => item !== role).forEach((targetRole) => notify(role === "KUNDENSUPPORT" ? "SUPPORTANTWORT" : "NEUE_NACHRICHT", `Neue Nachricht in „${conversation.title}“.`, targetRole));
    form.reset(); return true;
  }

  function markRead(conversation, role) { conversation.messages.forEach((message) => { if (!message.readBy.includes(role)) message.readBy.push(role); }); }
  function unreadCount(conversation, role) { return conversation.messages.filter((message) => message.senderRole !== role && !message.readBy.includes(role)).length; }
  function totalUnread(state, role) { return state.conversations.filter((item) => item.roles.includes(role)).reduce((sum, item) => sum + unreadCount(item, role), 0); }
  function participantLabels(conversation, role) { return conversation.participants.map((item) => item.role === role ? item.label : item.anonymousLabel || item.label); }

  window.AutoAnonymNachrichten = { render, submit, markRead, unreadCount, totalUnread };
}());
