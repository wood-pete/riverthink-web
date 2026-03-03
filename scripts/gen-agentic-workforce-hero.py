#!/usr/bin/env python3
"""Generate hero image for Agentic AI Digital Workforce blog post."""

from PIL import Image, ImageDraw, ImageFont
import math

# ── Colour palette ────────────────────────────────────────────────────────────
YELLOW  = (255, 204,   0)
RED     = (230,  57,  70)
BLUE    = ( 42, 127, 255)
GREEN   = ( 46, 204, 113)
PURPLE  = (155,  89, 182)
GREY    = (127, 140, 141)
BLACK   = (  0,   0,   0)
WHITE   = (255, 255, 255)
DARK    = ( 30,  30,  30)

def lighten(c, amt=110):
    return tuple(min(v + amt, 255) for v in c[:3])

W, H = 1400, 820
img  = Image.new('RGB', (W, H), WHITE)
draw = ImageDraw.Draw(img)

# ── Font loader ───────────────────────────────────────────────────────────────
def get_font(size):
    for path in [
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ]:
        try:
            return ImageFont.truetype(path, size)
        except Exception:
            pass
    return ImageFont.load_default()

f56 = get_font(52)
f22 = get_font(22)
f18 = get_font(18)
f15 = get_font(15)
f13 = get_font(13)
f11 = get_font(11)

def tw(text, font):
    bb = draw.textbbox((0, 0), text, font=font)
    return bb[2] - bb[0], bb[3] - bb[1]

def ctext(cx, cy, text, font, color=BLACK):
    w, h = tw(text, font)
    draw.text((cx - w // 2, cy - h // 2), text, font=font, fill=color)

def rrect(x1, y1, x2, y2, r=8, fill=WHITE, outline=BLACK, lw=2):
    draw.rounded_rectangle([x1, y1, x2, y2], radius=r, fill=fill,
                           outline=outline, width=lw)

def arrow(x1, y1, x2, y2, color=BLUE, lw=2):
    draw.line([(x1, y1), (x2, y2)], fill=color, width=lw)
    ang = math.atan2(y2 - y1, x2 - x1)
    L, a = 13, 0.42
    pts = [
        (x2, y2),
        (int(x2 - L * math.cos(ang - a)), int(y2 - L * math.sin(ang - a))),
        (int(x2 - L * math.cos(ang + a)), int(y2 - L * math.sin(ang + a))),
    ]
    draw.polygon(pts, fill=color)

def db_cylinder(cx, cy, w=34, h=12, fill=GREY):
    draw.ellipse([cx-w, cy, cx+w, cy+h], fill=fill, outline=BLACK, width=1)
    draw.rectangle([cx-w, cy+h//2, cx+w, cy+h+24], fill=fill, outline=None)
    draw.line([(cx-w, cy+h//2), (cx-w, cy+h+24)], fill=BLACK, width=1)
    draw.line([(cx+w, cy+h//2), (cx+w, cy+h+24)], fill=BLACK, width=1)
    draw.ellipse([cx-w, cy+h+12, cx+w, cy+h*2+12], fill=tuple(max(0,v-25) for v in fill[:3]), outline=BLACK, width=1)

# ── Header ────────────────────────────────────────────────────────────────────
draw.rectangle([0, 0, W, 95], fill=BLACK)
ctext(W//2, 36, "AGENTIC AI", f56, WHITE)
ctext(W//2, 76, "Orchestration  ·  Oversight  ·  The Future of Work", f15, YELLOW)
draw.rectangle([0, 95, W, 100], fill=YELLOW)

# ── Left panel: What Is It? ───────────────────────────────────────────────────
draw.rectangle([10, 108, 295, 755], fill=(242, 240, 252), outline=PURPLE, width=1)
draw.rectangle([10, 108, 295, 148], fill=PURPLE)
ctext(152, 128, "WHAT IS IT?", f18, WHITE)

concepts = [
    (PURPLE, "MULTI-AGENT SYSTEM",   "A team of specialist\nAI agents, not one LLM"),
    (BLUE,   "ORCHESTRATION ENGINE", "Manager agent that\nplans & delegates"),
    (GREEN,  "SPECIALISATION",       "Each agent has unique\ndomain skills"),
    (YELLOW, "TOOL USE",             "Agents invoke each\nother as tools"),
    (RED,    "HUMAN OVERSIGHT",      "Guardrails, escalation\n& control at every step"),
]

y = 158
for col, title, desc in concepts:
    light = lighten(col, 110)
    rrect(18, y, 287, y+80, r=6, fill=light, outline=col, lw=2)
    draw.rectangle([18, y, 30, y+80], fill=col)
    draw.rounded_rectangle([18, y, 30, y+80], radius=6, fill=col, outline=col, width=0)
    draw.text((38, y+8),  title, font=f13, fill=BLACK)
    draw.line([(38, y+26), (280, y+26)], fill=col, width=1)
    for i, line in enumerate(desc.split('\n')):
        draw.text((38, y+33+i*16), line, font=f11, fill=DARK)
    y += 88

# Not-just-a-chatbot note
rrect(18, y+6, 287, y+50, r=6, fill=(255, 228, 228), outline=RED, lw=2)
ctext(152, y+20, "✗  NOT just a chatbot", f11, RED)
draw.line([(35, y+30), (270, y+30)], fill=RED, width=1)
ctext(152, y+43, "Single LLM answering one question", f11, GREY)

# ── Right panel: Control Tower + Governance ───────────────────────────────────
draw.rectangle([1105, 108, 1390, 755], fill=(242, 240, 252), outline=PURPLE, width=1)
draw.rectangle([1105, 108, 1390, 148], fill=PURPLE)
ctext(1247, 128, "CONTROL TOWER", f18, WHITE)

ct_items = [
    (RED,    "Real-time Monitoring"),
    (YELLOW, "Guardrails & Policy"),
    (BLUE,   "Hallucination Detection"),
    (GREEN,  "Escalation Triggers"),
    (PURPLE, "Audit Trail"),
    (GREY,   "Human Intervention"),
]
y = 158
for col, item in ct_items:
    light = lighten(col, 110)
    rrect(1113, y, 1382, y+36, r=5, fill=light, outline=col, lw=2)
    draw.ellipse([1120, y+10, 1136, y+26], fill=col, outline=BLACK, width=1)
    draw.text((1145, y+10), item, font=f13, fill=BLACK)
    y += 44

# Governance divider
y += 10
draw.rectangle([1105, y, 1390, y+36], fill=GREEN)
ctext(1247, y+18, "RESPONSIBLE AI", f18, WHITE)
y += 40

gov = [
    "AI Council Governance",
    "Trustee Board Sign-off",
    "Ethics by Design",
    "Citizen-led Innovation",
    "Use-case Risk Reviews",
]
for item in gov:
    draw.text((1120, y+6), f"✓  {item}", font=f13, fill=BLACK)
    y += 32

# ── Centre: Orchestration Diagram ────────────────────────────────────────────
cx = 695

# Human stick figure
hx, hy = cx, 148
draw.ellipse([hx-20, hy-20, hx+20, hy+20], fill=lighten(YELLOW, 80), outline=BLACK, width=2)
draw.line([(hx, hy+20), (hx, hy+60)], fill=BLACK, width=2)
draw.line([(hx-28, hy+38), (hx+28, hy+38)], fill=BLACK, width=2)
draw.line([(hx, hy+60), (hx-22, hy+85)], fill=BLACK, width=2)
draw.line([(hx, hy+60), (hx+22, hy+85)], fill=BLACK, width=2)
rrect(hx-80, hy+90, hx+80, hy+115, r=4, fill=lighten(YELLOW, 80), outline=BLACK, lw=1)
ctext(hx, hy+103, "Business Intent", f13, BLACK)

# Arrow: human → orchestrator
arrow(hx, hy+115, hx, 258, RED, 3)
draw.text((hx+6, 195), "Request", font=f11, fill=RED)

# Orchestrator box
ox1, oy1, ox2, oy2 = cx-185, 262, cx+185, 330
rrect(ox1, oy1, ox2, oy2, r=12, fill=YELLOW, outline=BLACK, lw=3)
ctext(cx, oy1+22, "ORCHESTRATOR / MANAGER AGENT", f18, BLACK)
ctext(cx, oy1+48, "Plans  ·  Delegates  ·  Validates  ·  Escalates", f11, DARK)

# Specialist agents
agents = [
    ("RESEARCH\nAGENT",  GREEN,  cx-290, 435),
    ("CUSTOMER\nAGENT",  BLUE,   cx- 95, 435),
    ("RISK\nAGENT",      RED,    cx+ 95, 435),
    ("FINANCE\nAGENT",   PURPLE, cx+290, 435),
]

for label, col, ax, ay in agents:
    src_x = max(ox1+20, min(ax, ox2-20))
    arrow(src_x, oy2, ax, ay-38, BLUE, 2)
    light = lighten(col, 100)
    rrect(ax-68, ay-36, ax+68, ay+36, r=10, fill=light, outline=col, lw=3)
    lines = label.split('\n')
    for i, line in enumerate(lines):
        yoff = -10 if len(lines) > 1 else 0
        ctext(ax, ay + yoff + i*22, line, f15, BLACK)

# Data / tools beneath each agent
for label, col, ax, ay in agents:
    dy = ay + 90
    arrow(ax, ay+36, ax, dy-5, GREEN, 2)
    db_cylinder(ax, dy, w=34, h=12, fill=(170, 185, 185))
    ctext(ax, dy+44, "DATA / TOOLS", f11, GREY)

# Escalation arrow: orchestrator → human (left side loop)
ex = ox1 - 35
draw.line([(ex, oy1+20), (ex, hy+103)], fill=RED, width=2)
arrow(ex, oy1+20, ox1, oy1+20, RED, 2)
arrow(ex, hy+103, hx-80, hy+103, RED, 2)
w11, _ = tw("ESCALATION", f11)
draw.text((ex - w11 - 4, 380), "ESCALATION", font=f11, fill=RED)

# Arrow: orchestrator → control tower
arrow(ox2, (oy1+oy2)//2, 1105, 280, PURPLE, 2)
draw.text((980, 278), "Monitor", font=f11, fill=PURPLE)

# ── Footer ────────────────────────────────────────────────────────────────────
draw.rectangle([0, 762, W, H], fill=DARK)
tags = "#AgenticAI   #EnterpriseAI   #ResponsibleAI   #DigitalWorkforce   #Orchestration   #FutureOfWork"
ctext(W//2, 782, tags, f15, WHITE)

# Outer border
draw.rectangle([2, 2, W-3, H-3], outline=BLACK, width=3)

# ── Save ──────────────────────────────────────────────────────────────────────
out = "/Users/petewood/Library/Mobile Documents/com~apple~CloudDocs/Developer/2026/riverthink/www/public/blog/agentic-ai-digital-workforce-hero.png"
img.save(out, "PNG")
print(f"Saved → {out}")
