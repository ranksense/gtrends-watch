import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
     /*const categories = [
      { id: 1, name: 'All Categories' },
      { id: 2, name: 'Business' },
      { id: 3, name: 'Entertainment' },
      { id: 4, name: 'Sci/Tech' },
      { id: 5, name: 'Sports' },
      { id: 6, name: 'Top Stories' }
    ];*/
    const categories = [
      { id: 1, name: 'All Categories', 
        topics: ["blink-182 & Lil Wayne announce co-headlining tour", "Duchess Meghan's royal baby is here and it's a boy, Buckingham Palace says", "Bookmakers suspend betting on royal baby birthdate amid speculation that Meghan has given birth", "Microsoft open-sources its quantum computing development tools", "Giants vs. Reds odds, line: MLB picks, predictions for May 6 from model on 73-51 roll", "St. Charles levee breach prompts evacuations", "Gina Rodriguez Marries Longtime Love Joe LoCicero", "Spider-Man: Far From Home's new trailer spoils Avengers: Endgame, explodes the MCU", "Wall Street falls after Trump's China tariff threat", "Wendy's is bringing back its spicy chicken nuggets…eet racked up more than 2 million likes in 2 days", "China State Funds Sought to Cushion Blow as Stocks Tumble", "S&P Metals & Mining SPDR (XME) Looking To Gain Traction: What the Technicals Reveal", "Sunscreens may enter bloodstream, but health effect unknown, study finds"] 
      },
      { id: 2, name: 'Business', 
        topics: ["Chance the Rapper leads Twitter order for Wendy's to bring back spicy chicken nuggets", "Microsoft open-sources its quantum computing development tools", "Riot Employees Prepare For Walkout Today", "Barclays Reaffirms Equal Weight Rating for WOLTERS KLUWER/ADR (WTKWY)", "Which Stocks Have the Most to Lose From Trump's Trade War and How to Know When They Hit Bottom", "Greenlight's David Einhorn pitches long on AerCap, short on GATX at Sohn Conference", "Glenview's Larry Robbins says he's shorting 3M shares", "Pfizer gets US approval for $225000 a year heart drug", "It may surprise you: Jaguar Health, Inc. (NASDAQ:JAGX)", "Asian stocks mixed after Wall Street day that was listless", "Microsoft Launches the Azure Blockchain Service", "Sunscreens may enter bloodstream, but health effect unknown, study finds"]
      },
      { id: 3, name: 'Entertainment', 
        topics: ["Lil Wayne and Blink-182 are teaming up for new tour", "A Timeline of Live Performances at the Met Gala", "INCUBUS Announces 20th-Anniversary Tour For Acclaimed 'Make Yourself' Album", "46th annual Daytime Emmy Awards: The winners list", "The Young and the Restless Spoilers Raw Breakdown: Monday, May 6", "Singer Joy Villa wears anti-abortion gown on Daytime Emmys red carpet: 'Pro-life is pro-woman'", "Review: Jacqueline MacInnes Wood wins 2019 Outstanding Lead Actress Emmy", "2019 Daytime Emmy Winners Gallery", "Bookmakers suspend betting on royal baby birthdate amid speculation that Meghan has given birth", "'Rachael Ray,' Kyler Pettis are early Daytime Emmy Award winners", "Daytime Emmys 2019: DailyMailTV wins Outstanding E… News Program... as Alex Trebek accepts award ...", "Curvy socialite Kim Kardashian earns up to KSh 50 million from a sponsored Instagram post", "Famous faces tweet congratulations to Prince Harry, Meghan Markle after royal baby arrives", "Wendy Williams' Estranged Husband Demanding Spousal Support in Divorce Proceedings", "Wyatt Learns Thomas Wants Hope As Sally Comes Clean", "Joyner Lucas Exposes DMs from Tomi Lahren", "Ed Sheeran's Been Playing His New Song At His Concerts And No One Realised!", "DAYTIME EMMY WINNER: Outstanding Supporting Actor In A Drama Series"]
      },
      { id: 4, name: 'Sci/Tech', 
        topics:  ["Microsoft open-sources its quantum computing development tools", "Assassin's Creed Ragnarok Screenshots, Details Leak", "Machine learning for .NET devs: ML.NET goes GA", "Microsoft is making Cortana better at holding conversations", "Original Devil May Cry Coming to Nintendo Switch This Summer", "Ted Chiang, the mind behind Arrival, returns with another awe-inducing sci-fi collection", "Microsoft's Fluent Design System goes cross platform with iOS, Android, and the web", "Scientists Record The First Collision Between Black Hole And Neutron Star", "Windows 10 on ARM firmware for Lumia 950 XL now available", "Microsoft just teased a slick new Minecraft AR game for your phone", "The Gaia Spacecraft Was Studying Stars, But It Found Something Else — 3 Asteroids", "First demonstration of antimatter wave interferometry", "Angela Ahrendts Shares Lessons She Learned While Working at Apple", "For InSight, Dust Cleanings Will Yield New Science", "Evil Clippy: a tool for making undetectable malicious Microsoft Office docs", "Cheetah Mobile previews international edition of top-selling CM Translator at Microsoft Build 2019", "Google Stadia vs. Project xCloud: Here's what we know so far"]
      },
      { id: 5, name: 'Sports', 
        topics: ["Premier League title race LIVE: 2018-19 EPL table as it stands for Man City and Liverpool", "Cincinnati's Jesse Winker on the bench Monday afternoon", "Serie A: Milan vs Bologna 1-0, as Suso opened the score", "AFC Champions League: Esteghlal bow out after Al Duhail draw [VIDEO]", "Flyers add Therrien, Yeo as assistants to Vigneault", "Ben Askren Meets Jordan Burroughs At Beat The Streets", "The Cincinnati Reds were attacked by bees, further proof that Ohio is the seventh ring of hell", "Tiger Woods to complete legendary golf foursome with Presidential Medal of Freedom", "LIVE Ashleigh Barty - Danielle Collins WTA Madrid - 6 May 2019", "Get to know new Mets reliever Wilmer Font, who might also be best rotation fill-in option", "SNY analyst Ron Darling announces he's been diagnosed with thyroid cancer", "Manchester City hold talks over £42million deal for Sporting Lisbon midfielder Bruno Fernandes", "Autosport Podcast: Has Formula E become too random?"]
      },
      { id: 6, name: 'Top Stories', 
        topics: ["Blink-182, Lil Wayne Announce Co-Headlining Summer Tour", "Met Gala exhibit features Bjork's swan dress as it explores 'camp' in fashion", "INCUBUS Announces 20th-Anniversary Tour For Acclaimed 'Make Yourself' Album", "TV Stars Talk Judge Judy, \"Diversity of Platforms and Diversity of Content\" at Daytime Emmys", "Jet Traveling From Las Vegas To Mexico Lost, Says Official", "Chance the Rapper leads Twitter order for Wendy's to bring back spicy chicken nuggets", "Manchester City vs Leicester City: TV channel, live stream, squad news & preview", "Serie A: Milan vs Bologna 1-0, as Suso opened the score", "Our readers react to Daytime Emmys 2019: Were they…t ever' or 'a complete mess'? And so many upsets!", "Dem state lawmaker records himself harassing pro-life woman outside Planned Parenthood", "Flyers add Therrien, Yeo as assistants to Vigneault", "Assassin's Creed Ragnarok Screenshots, Details Leak", "Duchess Meghan's royal baby is here and it's a boy, Buckingham Palace says"] 
      }
    ];  
      
    return {categories};
  }

  // Overrides the genId method to ensure that a category always has an id.
  // If the categories array is empty,
  // the method below returns the initial number (11).
  // if the categories array is not empty, the method below returns the highest
  // category id + 1.
  genId(categories: Category[]): number {
    return categories.length > 0 ? Math.max(...categories.map(category => category.id)) + 1 : 11;
  }
}

