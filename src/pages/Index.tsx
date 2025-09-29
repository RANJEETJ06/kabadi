import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Users, MapPin, Phone, Mail } from "lucide-react";
import kabaddiHero from "@/assets/kabaddi-hero.jpg";
import player1 from "@/assets/player1.jpg";
import player2 from "@/assets/player2.jpg";
import villageView from "@/assets/village-view.jpg";

const Index = () => {
  const players = [
    {
      name: "Rajesh Kumar",
      position: "Raider",
      achievements: "State Championship Winner 2023",
      image: player1,
      rating: 5,
    },
    {
      name: "Priya Singh",
      position: "Defender",
      achievements: "Best Defender - District Level",
      image: player2,
      rating: 5,
    },
  ];

  const achievements = [
    { title: "District Champions", year: "2023", icon: Trophy },
    { title: "State Semi-finalists", year: "2022", icon: Star },
    { title: "50+ Active Players", year: "2024", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${kabaddiHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary/20 text-primary-foreground border-primary/30 text-lg px-6 py-2">
            Gobindapur Village
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Kabaddi
            <span className="bg-gradient-to-r from-saffron to-primary bg-clip-text text-transparent">
              {" "}
              Champions
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Showcasing the finest kabaddi talent from our proud village. Where
            tradition meets excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-warm"
            >
              Meet Our Players
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-primary text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm"
            >
              Our Achievements
            </Button>
          </div>
        </div>
      </section>

      {/* About Village Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About <span className="text-primary">Gobindapur</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nestled in the heart of rural India, Gobindapur has been
                nurturing kabaddi talent for generations. Our village takes
                immense pride in preserving this traditional sport while
                developing world-class athletes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With a strong community spirit and dedicated training
                facilities, we have produced champions who have competed at
                district and state levels, bringing glory to our village.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <MapPin className="w-5 h-5" />
                <span>Gobindapur Village, India</span>
              </div>
            </div>
            <div className="relative">
              <img
                src={villageView}
                alt="Gobindapur Village View"
                className="rounded-2xl shadow-soft w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-warm border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">50+ Players</p>
                    <p className="text-sm text-muted-foreground">
                      Active Community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Players Showcase */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Star Players</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the talented athletes who represent Gobindapur with pride and
              determination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-2">
                    <div className="flex items-center gap-1">
                      {[...Array(player.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {player.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="mb-3 bg-primary/10 text-primary"
                  >
                    {player.position}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed">
                    {player.achievements}
                  </p>
                </div>
              </Card>
            ))}

            {/* Call to Action Card */}
            <Card className="border-dashed border-2 border-primary/30 bg-primary/5 flex items-center justify-center min-h-[400px]">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Join Our Team
                </h3>
                <p className="text-muted-foreground mb-4">
                  Showcase your kabaddi skills with Gobindapur's finest
                </p>
                <Button className="bg-primary hover:bg-primary-glow">
                  Contact Us
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognition of our dedication and hard work in kabaddi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center p-8 border-0 shadow-soft hover:shadow-warm transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  {achievement.year}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Connect With <span className="text-primary">Our Community</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join our kabaddi community or get in touch to learn more about our
            training programs and upcoming matches
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-0 shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <p className="text-muted-foreground mb-1">Brahmananda Swain</p>
                  <p className="text-muted-foreground">+91 9861778176</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">
                    ranjeetjena06@zohomail.com
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-lg px-12 py-6 rounded-full shadow-warm"
          >
            Join Gobindapur Kabaddi
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Gobindapur Kabaddi Club</h3>
          <p className="text-gray-300 mb-6">
            Preserving tradition, building champions
          </p>
          <p className="text-gray-400">
            © 2025 Gobindapur Village. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
